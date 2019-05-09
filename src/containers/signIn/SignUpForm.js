import React, { Component } from "react";
import { MDBAlert, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import Tools from '../../utils/tools'
import store, {history} from "../../store";
import firebase from 'firebase'
import { AUTH_STATE_CHANGED } from '../../reducers/global'

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


  async onSignUpClick() {
    let email = this.state.email
    let userName = this.state.userName
    let password = this.state.password
    let confirmPassword = this.state.confirmPassword


    if (!Tools.validateEmail(email)) {
      this.setState({
        error: true,
        errorMessage: "Please enter a valid email address"
      })
      return
    }

    if (userName == "") {
      this.setState({
        error: true,
        errorMessage: "Please enter a user name"
      })
      return
    }

    if (password == "" || password.length < 6) {
      this.setState({
        error: true,
        errorMessage: "Please must be at least 6 characters long"
      })
      return
    }

    if (confirmPassword != password) {
      this.setState({
        error: true,
        errorMessage: "Passwords does not match"
      })
      return
    }

try{
    let user = await firebase.auth().createUserWithEmailAndPassword(email, password)
   
    let updatedUser = firebase.auth().currentUser.updateProfile({ displayName: userName})

    store.dispatch({ type: AUTH_STATE_CHANGED, isSignedIn: true, uid: updatedUser.uid, token: updatedUser.token })

    history.push("/")

}catch(e){
  var errorMessage = e.message;

  this.setState({
    error: true,
    errorMessage: errorMessage
  })
}

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
          <Message />
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