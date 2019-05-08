import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from "mdbreact";
import ProductCard from '../../components/productCard'
import axios from 'axios'
import { SERVER_URL } from '../../constants'
import store from '../../store'
import { ADD_TO_CART } from '../../reducers/cart'

class BestSellersSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    console.log('Click happened', product.name);
    store.dispatch({ type: ADD_TO_CART, cartItem: product })
  }


  componentDidMount = () => {
    console.log("componentDidMount");
    this.getDataFromApi()
  }

  getDataFromApi = () => {
    var url = SERVER_URL + "products/simillerProducts/" + this.props.productId
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
      <section >
        <h5 style={{marginTop:20, marginLeft:20}} >
          Similer Products
      </h5>

        <MDBRow style={{maxWidth:"100%"}}>
          {this.state.products.map((product, index) => {
            console.log("product :" + index , this.state.products)
            return <MDBCol
              key={index} lg="4" md="12" >
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



export default BestSellersSection;