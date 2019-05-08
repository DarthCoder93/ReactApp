import React from 'react';
import axios from 'axios'
import { MDBContainer, MDBView, MDBCol, MDBRow, MDBMask, MDBCard, MDBBtn, MDBIcon, MDBBadge } from "mdbreact";
import queryString from 'query-string'
import { SERVER_URL } from '../../constants'
import BrandsSection from '../../components/brandsSection'

class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }
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



    render() {

        return (
            <MDBContainer>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Fratured Brands
      </h2>
                <div className="">
                    <BrandsSection />
                </div>
            </MDBContainer>
        );
    }
}

export default ProductDetailsPage;