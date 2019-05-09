import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBContainer, MDBBadge, MDBCardTitle, MDBCardText, MDBIcon } from
  "mdbreact";
import store, { history } from '../../store'
import { ADD_TO_CART } from '../../reducers/cart'

class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.onProductClick = this.onProductClick.bind(this);
  }

  addToCart() {
    console.log('Click happened', this.props.product.name);
    store.dispatch({ type: ADD_TO_CART, cartItem: this.props.product })
  }


  onProductClick() {
    console.log("onProductClick")
    history.push("/singleProduct?id=" + this.props.product._id)
  }


  render() {
    return (
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
        <MDBCardImage onClick={() => this.onProductClick(this.props.product)} cascade top src={this.props.product.imgUrl}
          waves />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">
            Shoes
        </MDBCardTitle>
          <MDBCardTitle onClick={() => this.onProductClick(this.props.product
          )}>
            <a ><strong>{this.props.product.name}</strong></a>
          </MDBCardTitle>
          <MDBCardText>
            {this.props.product.shortDescription}
          </MDBCardText>

          <span className="float-left">Rs. {this.props.product.price}</span>
          <MDBContainer>
            <MDBBadge color="danger">{this.props.product.discount}% Discount</MDBBadge>
          </MDBContainer>
          <span className="float-right">
            {/* <MDBTooltip placement="top" componentClass="fa fa-shopping-cart mr-3" tag="a" component="i" tooltipContent="Add to Cart" />
            <MDBTooltip placement="top" componentClass="fa fa-share-alt mr-3" tag="a" component="i" tooltipContent="Share" />
            <MDBTooltip placement="top" componentClass="fa fa-heart" tag="a" component="i" tooltipContent="Added to Wishlist" /> */}
            <button onClick={() => this.addToCart()}><MDBIcon icon="fa fa-shopping-cart" /> </button>
          </span>

        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default CardComponent;