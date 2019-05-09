import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBAlert, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import store from '../../store'
import { CHNAGE_CART_ITEM_QTY, REMOVE_FROM_CART, CART_PURCHASING, CART_PURCHASE_SUCCESS, CART_PURCHASE_FAILED } from '../../reducers/cart'
import firebase from 'firebase'
import axios from 'axios'
import { SERVER_URL } from '../../constants'



class CartPage extends Component {
    constructor(props) {
        super(props);
        this.onQtyChange = this.onQtyChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onPurchaseOrder = this.onPurchaseOrder.bind(this);
    }


    state = {
        cartItems: [],
        columns: [
            {
                label: '',
                field: 'img',
            },
            {
                label: <strong>Product</strong>,
                field: 'product'
            },
            {
                label: <strong>Price</strong>,
                field: 'price'
            },
            {
                label: <strong>QTY</strong>,
                field: 'qty'
            },
            {
                label: <strong>Amount</strong>,
                field: 'amount'
            },
            {
                label: '',
                field: 'button'
            }
        ]
    }

    onQtyChange(product, e) {
        console.log('Click happened', e.target.value);


        store.dispatch({ type: CHNAGE_CART_ITEM_QTY, prductID: product._id, qty: e.target.value })

        //store.dispatch({type: ADD_TO_CART , cartItem: product})
    }

    onRemoveItem(product) {
        console.log('onRemoveItem', product._id);
        store.dispatch({ type: REMOVE_FROM_CART, prductID: product._id })
    }

    onPurchaseOrder = () => {
        console.log("onPurchaseOrder")

        if (this.props.isSignedIn) {

            if (this.props.data.length < 1){
                store.dispatch({type: CART_PURCHASE_FAILED, errorMsg: "No Items in the Cart"})
                return
            }

            var parms = {
                "userId": firebase.auth().currentUser.uid,
                "total": this.props.total,
                "orderItems": []
            }

            this.props.data.map(item => {
                var newItem = {
                    "productId": item._id,
                    "discount": item.discount,
                    "price": item.price,
                    "discountedPrice": item.discountedPrice,
                    "quantity": item.qty
                }
                parms.orderItems.push(newItem)
            })

            var url = SERVER_URL + "orders"
            store.dispatch({ type: CART_PURCHASING })
            axios.post(url, parms)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    //dispatch success actiion to show the success message
                    store.dispatch({ type: CART_PURCHASE_SUCCESS })
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    //dispatch failed actiion to show the error message
                    store.dispatch({ type: CART_PURCHASE_FAILED, errorMsg: error.message })
                })


        } else {
            store.dispatch({ type: CART_PURCHASE_FAILED, errorMsg: "Please sign in to continue purchase process" })
        }

    }



    render() {

        const rows = [];
        const { columns } = this.state;

        this.props.data.map(row => {
            return rows.push(
                {
                    'img': <img src={row.imgUrl} alt="" style={{ width: 100, height: 100 }} className="img-fluid z-depth-0" />,
                    'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.name}</strong></h5>, <p key={new
                        Date().getDate} className="text-muted">{row.subTitle}</p>],
                    'price': `$${row.discountedPrice}`,
                    'qty':
                        <MDBInput onChange={(e) => this.onQtyChange(row, e)} type="number" value={row.qty} default={1} className="form-control" style={{ width: "100px" }} />,
                    'amount': <strong>${row.qty * row.discountedPrice}</strong>,
                    'button':
                        <MDBBtn onClick={() => this.onRemoveItem(row)} color="primary">
                            X
      </MDBBtn>
                }
            )
        });

        const OrderStateMessage = () => {

            if (this.props.purchasing) {
                return <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            } else if (this.props.success) {
                return <MDBAlert color="success" >
                    Order Completed
              </MDBAlert>
            } else if (this.props.error) {
                return <MDBAlert color="danger" >
                    {this.props.errorMsg}
                </MDBAlert>
            } else {
                return <div></div>
            }
        }

        return (
            <div>
                <MDBContainer >
                    <MDBRow className="my-2" center>
                        <MDBCard className="w-100">
                            <MDBCardBody>
                                <MDBTable className="product-table">
                                    <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
                                    <MDBTableBody rows={rows} />
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBRow>
                    <MDBRow >
                        <MDBCard className="w-100" >
                            <MDBCardBody>
                                <MDBCol lg="6" md="6">
                                    <OrderStateMessage />
                                </MDBCol>
                                <MDBCol lg="6" md="6" >
                                    <h3>Total {this.props.total}</h3>
                                </MDBCol >
                                <MDBCol lg="6" md="6">
                                    <MDBBtn onClick={this.onPurchaseOrder} color="primary" rounded>Purchase</MDBBtn>
                                </MDBCol>
                                <MDBCol lg="6" md="6" style={{ marginBottom: 100 }}>
                                </MDBCol>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }
}

const mapStateToProps = function (state) {
    return {
        data: state.cart.cartItems,
        total: state.cart.total,
        isSignedIn: state.global.signedIn,
        purchasing: state.cart.purchasing,
        success: state.cart.success,
        error: state.cart.error,
        errorMsg: state.cart.errorMsg
    }
}

export default connect(mapStateToProps)(CartPage);