import React from 'react';
import { MDBContainer, MDBView, MDBCol, MDBRow, MDBMask, MDBCard, MDBBtn, MDBIcon } from "mdbreact";

class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

            <MDBContainer>
                <MDBCard style={{ marginTop: 20 }}>
                    <MDBRow style={{ marginLeft: 20, marginBottom: 20, marginRight: 20 }}>
                        <MDBCol size="4" lg="4" md="6" sm="12" style={{ marginTop: 20 }}>

                            <MDBView hover zoom >
                                <img
                                    src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                                    className="img-fluid"
                                    style={{ width: 400, height: 500 }}
                                    alt=""
                                />
                                <MDBMask className="flex-center">
                                    <p className="white-text">Zoom effect</p>
                                </MDBMask>
                            </MDBView>

                        </MDBCol>
                        <MDBCol size="8  " lg="8" md="6" sm="12" style={{ marginTop: 20 }}>

                            <MDBRow>
                                <h3>Product Name</h3>

                                <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>

                                <label>RS. 600 </label>

                            </MDBRow>
                            <MDBRow>
                                <MDBBtn color="primary" style={{ width: 300 }}>
                                    <MDBIcon icon="shopping-cart" className="mr-1" /> Add To Cart
                            </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

                <MDBCard style={{ marginTop: 20, marginBottom:20 }}>
                    <MDBRow style={{ margin: 20 }}>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default ProductDetailsPage;