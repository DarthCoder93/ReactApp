import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  MDBIcon} from
"mdbreact";

const productCard = (props) => {
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src={ props.product.imgUrl}
        waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Shoes
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>{props.product.name}</strong></a>
        </MDBCardTitle>
        <MDBCardText>
        {props.product.shortDescription}
        </MDBCardText>
      
          <span className="float-left">Rs. {props.product.price}</span>
          <span className="float-right">
            {/* <MDBTooltip placement="top" componentClass="fa fa-shopping-cart mr-3" tag="a" component="i" tooltipContent="Add to Cart" />
            <MDBTooltip placement="top" componentClass="fa fa-share-alt mr-3" tag="a" component="i" tooltipContent="Share" />
            <MDBTooltip placement="top" componentClass="fa fa-heart" tag="a" component="i" tooltipContent="Added to Wishlist" /> */}
            <button onClick={()=>props.onAddToCartClick(props.product)}><MDBIcon icon="fa fa-shopping-cart" /> </button>
          </span>
       
      </MDBCardBody>
    </MDBCard>
  );
}

export default productCard;