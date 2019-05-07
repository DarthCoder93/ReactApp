import React, { Component } from "react";
import SignInSection from './SignInForm';
import SignUpSection from './SignUpForm';


class FlippingCardPage extends Component {

  render() {
    return (
      <div >

        <div className="row" style={{marginTop:16, marginBottom:500}}>
          <div className="col-md-6">
            <SignInSection />
          </div>
          <div className="col-md-6">
            <SignUpSection />
          </div>
        </div>

      </div>
    );
  }
}

export default FlippingCardPage;