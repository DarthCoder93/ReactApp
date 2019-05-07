import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import { connect } from 'react-redux';


class CartPage extends Component {
    state = {
        data: [
            
        ],
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
                label: <strong>Color</strong>,
                field: 'color'
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

    render() {

        const rows = [];
        const { columns } = this.state;

        this.props.data.map(row => {
            return rows.push(
                {
                    'img': <img src={row.imgUrl} alt="" style={{ width: 100, height: 100 }} className="img-fluid z-depth-0" />,
                    'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.name}</strong></h5>, <p key={new
                        Date().getDate} className="text-muted">{row.subTitle}</p>],
                    'color': row.color,
                    'price': `$${row.price}`,
                    'qty':
                        <MDBInput type="number" default={row.qty} className="form-control" style={{ width: "100px" }} />,
                    'amount': <strong>${row.qty * row.price}</strong>,
                    'button':
                        <MDBBtn color="primary">
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
                    <MDBRow>
                        <MDBCard className="w-100">
                            <MDBCol lg="6" md="6">
                                <h3>Total 2600</h3>
                            </MDBCol >
                            <MDBCol lg="6" md="6">
                                <MDBBtn color="primary" rounded>Primary</MDBBtn>
                            </MDBCol>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </div>

        );
    }
}

const mapStateToProps = function(state) {
    return {
      data: state.cart.cartItems
    }
  }

export default connect(mapStateToProps)(CartPage);