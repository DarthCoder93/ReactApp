import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon} from
"mdbreact";

const eCommercePage = () => {
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg" waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Shoes
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>Product name</strong></a>
        </MDBCardTitle>
        <ul className="rating">
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
        </ul>
        <MDBCardText>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$</span>
          <span className="float-right">
          <MDBIcon icon="star" />
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}

export default eCommercePage;