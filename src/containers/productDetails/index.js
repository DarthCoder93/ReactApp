import React from 'react';
import axios from 'axios'
import { MDBContainer, MDBView, MDBCol, MDBRow, MDBMask, MDBCard, MDBBtn, MDBIcon, MDBBadge } from "mdbreact";
import queryString from 'query-string'
import { SERVER_URL } from '../../constants'
import SimilerPproductsSection from './similerProductsSection'
import store from '../../store'
import {ADD_TO_CART} from '../../reducers/cart'

class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }

        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        const urlParms = queryString.parse(this.props.location.search);
        console.log(urlParms);
        this.getDataFromApi(urlParms.id)
    }

    getDataFromApi = (productId) => {
        var url = SERVER_URL + "products/" + productId
        let self = this
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);

                var product = response.data

                var desc = product.description.replace("\n", "<br/>");

                product.description = desc
                self.setState({ product: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    addToCart(product) {
        console.log('Click happened', product.name);
        store.dispatch({type: ADD_TO_CART , cartItem: product})
      }
      

    render() {

        const SimilerProducts = () => {
            console.log("Similer Prodiucts id :" ,this.state.product._id)
            if (this.state.product._id){
                return <SimilerPproductsSection productId={this.state.product._id}/>
            } else {
                return <div
                ></div>
            }
        }

        return (

            <MDBContainer>
                <MDBCard style={{ marginTop: 20 }}>
                    <MDBRow style={{ marginLeft: 20, marginBottom: 20, marginRight: 20 }}>
                        <MDBCol size="4" lg="4" md="6" sm="12" style={{ marginTop: 20 }}>

                            <MDBView hover zoom >
                                <img
                                    src={this.state.product.imgUrl}
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
                                <h3 style={{ fontWeight: "bold", fontSize: 28 }}>{this.state.product.name}</h3>
                            </MDBRow>
                            <MDBRow>
                                <MDBContainer>
                                    <label style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }} >RS. {this.state.product.price} </label>
                                </MDBContainer>
                                <MDBContainer><MDBBadge color="danger">{this.state.product.discount}% Discount</MDBBadge></MDBContainer>
                            </MDBRow>
                            <MDBRow>
                                <MDBBtn onClick={() => this.addToCart(this.state.product)} color="primary" style={{ width: 300, marginTop: 70 }}>
                                    <MDBIcon icon="shopping-cart" className="mr-1" /> Add To Cart
                            </MDBBtn>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

                <MDBCard style={{ marginTop: 20, marginBottom: 20 }}>
                    <MDBRow style={{ margin: 20 }}>
                        <MDBContainer>
                            <h5>{this.state.product.description}</h5>
                        </MDBContainer>
                    </MDBRow>
                </MDBCard>


                <MDBCard style={{ marginTop: 20, marginBottom: 20 }}>
                 
                    <SimilerProducts />
                </MDBCard>

            </MDBContainer>
        );
    }
}

export default ProductDetailsPage;