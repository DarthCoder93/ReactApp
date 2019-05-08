import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import { connect } from 'react-redux';
import store from '../../store'
import {CHNAGE_CART_ITEM_QTY} from '../../reducers/cart'
import Products from "../products";

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.onQtyChange = this.onQtyChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
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


        store.dispatch({type: CHNAGE_CART_ITEM_QTY , prductID: product._id, qty: e.target.value})

        //store.dispatch({type: ADD_TO_CART , cartItem: product})
      }

      onRemoveItem(product) {

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
                    'price': `$${row.price}`,
                    'qty':
                        <MDBInput onChange={(e) => this.onQtyChange(row, e)} type="number" value={row.qty} default={1} className="form-control" style={{ width: "100px" }} />,
                    'amount': <strong>${row.qty * row.price}</strong>,
                    'button':
                        <MDBBtn ONclICK color="primary">
                            X
      </MDBBtn>
                }
            )
        });

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
                    <MDBRow style={{marginBottom:40}}>
                        <MDBCard className="w-100" style={{marginBottom:40}}>
                            <MDBCol lg="6" md="6" >
                                <h3>Total 2600</h3>
                            </MDBCol >
                            <MDBCol lg="6" md="6">
                                <MDBBtn color="primary" rounded>Purchase</MDBBtn>
                            </MDBCol>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }
}

const mapStateToProps = function (state) {
    return {
        data: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartPage);