import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from "mdbreact";
import ProductCard from '../../components/productCard'
import axios from 'axios'
import { SERVER_URL } from '../../constants'
import store from '../../store'
import {ADD_TO_CART} from '../../reducers/cart'

class ProductsSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    console.log('Click happened', product.name);
    store.dispatch({type: ADD_TO_CART , cartItem: product})
  }


  componentDidMount = () => {
    console.log("componentDidMount");
    this.getDataFromApi()
  }

  getDataFromApi = () => {
    var url = SERVER_URL + "products"
    let self = this
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        self.setState({ products: response.data })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <section className="text-center my-5">
      <MDBRow>
                {this.state.products.map((product, index) => {
                     return <MDBCol 
                     key={index} lg="4" md="12" className="mb-lg-0 mb-4">
                        <ProductCard 
                        product={product} 
                        onAddToCartClick={this.addToCart}
                        />
                    </MDBCol>

                })}
            </MDBRow>
      </section>
    );
  }
}



export default ProductsSection;