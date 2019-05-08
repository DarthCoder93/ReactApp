import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import axios from 'axios'
import { SERVER_URL } from '../../constants'


class BrandsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brands: []
    };
  } 
  
  componentDidMount(){
    var url = SERVER_URL + "brands" 
    let self = this
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        self.setState({ brands: response.data })
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
      <MDBContainer>
        <div className="">
          <MDBRow>
            
          {this.state.brands.map((brand, index) => {
            return   <MDBCol md="4">
            <figure>
              <img
                src={brand.imgUrl}
                alt="Gallery"
                className="img-fluid"
                onClick={() =>
                  this.setState()
                }
              />
            </figure>
          </MDBCol>
          })}

          </MDBRow>
        </div>
      </MDBContainer>
    );
  }
}

export default BrandsPage;