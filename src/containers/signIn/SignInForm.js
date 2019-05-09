import React, { Component } from "react";
import { MDBAlert, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import firebase from 'firebase'
import { AUTH_STATE_CHANGED } from '../../reducers/global'
import store, { history } from '../../store'
import Tools from '../../utils/tools'


class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
      success: true,
      email: "",
      password: ""
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


  onGoogleSignIn() {
    console.log("google sign in")

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {

      //authenticate token
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      store.dispatch({ type: AUTH_STATE_CHANGED, isSignedIn: true, uid: user.uid, token: token })

      history.push('/')

    }).catch(function (error) {

      var errorMessage = error.message;
      this.setState({
        error: true,
        errorMessage: errorMessage
      })

    });
  }

  onSignInClick() {

    let email = this.state.email
    let password = this.state.password

    if (!Tools.validateEmail(email)){
      this.setState({
        error: true,
        errorMessage: "Invalide Email"
      })
      return
    }

    if (password.length < 6){
      this.setState({
        error: true,
        errorMessage: "Password should be at least 6 characters"
      })
      return
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      var errorMessage = error.message;

      this.setState({
        error: true,
        errorMessage: errorMessage
      })
    })
  }

  render() {

    const Message = () => {
      if (this.state.error) {
        return <MDBAlert color="danger" >
        {this.state.errorMessage}
      </MDBAlert>
      } else {
        return <div></div>
      }
    }
    
    return (
      <MDBCard style={{ marginTop: 16 }}>
        <MDBCardBody className="mx-4">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Sign in</strong>
            </h3>
          </div>
          <MDBInput
            label="Your email"
            value={this.state.email} 
            onChange={this._handleEmailChange}
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Your password"
            value={this.state.password} 
            onChange={this._handlePasswordChange}
            group
            type="password"
            validate
            containerClass="mb-0"
          />
        <Message />
          <div className="text-center mb-3">
            <MDBBtn
              type="button"
              gradient="blue"
              rounded
              className="btn-block z-depth-1a"
              onClick={this.onSignInClick.bind(this)}
            >
              Sign in
                </MDBBtn>
          </div>
          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

            or Sign in with:
              </p>
          <div className="row my-3 d-flex justify-content-center">
            <MDBBtn
              type="button"
              color="white"
              rounded
              className="z-depth-1a"
              onClick={this.onGoogleSignIn.bind(this)}
            >
              <MDBIcon fab icon="google-plus-g" className="blue-text" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>

    );
  }
};

export default SignInForm;