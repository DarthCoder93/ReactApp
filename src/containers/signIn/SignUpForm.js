import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
      success: true,
      email: "",
      password: "",
      confirmPassword: "",
      userName: ""
    }


  }

  _handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  _handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  _handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  _handleUserNameChange = (e) => {
    this.setState({
      userName: e.target.value
    });
  }


  onSignUpClick() {
    console.log("onSignUpClick")
  }

  render() {
    return (
      <MDBCard style={{ marginTop: 16 }}>
        <MDBCardBody className="mx-4">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Sign Up</strong>
            </h3>
          </div>
          <MDBInput
            label="Your email"
            group
            value={this.state.email} 
            onChange={this._handleEmailChange}
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="User Name"
            group
            value={this.state.userName} 
            onChange={this._handleUserNameChange}
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Your password"
            group
            value={this.state.password} 
            onChange={this._handlePasswordChange}
            type="password"
            validate
            containerClass="mb-0"
          />
          <MDBInput
            label="Confirm password"
            group
            value={this.state.confirmPassword} 
            onChange={this._handleConfirmPasswordChange}
            type="password"
            validate
            containerClass="mb-0"
          />
          <div className="text-center mb-3">
            <MDBBtn
              type="button"
              gradient="blue"
              rounded
              onClick={this.onSignUpClick.bind(this)}
              className="btn-block z-depth-1a"
            >
              Sign Up
                </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    )
  }
};

export default SignUpForm;