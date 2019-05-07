import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const smallImages = [
  "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(152)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(42)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
];

class BrandsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
           <h2 className="h1-responsive font-weight-bold text-center my-5">
        Fratured Brands
      </h2>
        <div className="">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    );
  }
}

export default BrandsPage;