import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Cart from '../cart'
import Products from '../products'
import ProductDetails from '../productDetails'
import Brand from '../brands'
import SignIn from '../signIn'
import About from '../about'
import { AUTH_STATE_CHANGED } from '../../reducers/global'
import store from '../../store'
import firebase from 'firebase'

import Header from '../../components/header';

class App extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //user is signed in change app state and redirect to home
        store.dispatch({ type: AUTH_STATE_CHANGED, isSignedIn: true })
      } else {
        store.dispatch({ type: AUTH_STATE_CHANGED, isSignedIn: false })
      }
    });
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route path="/authenticate" component={SignIn} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={Products} />
          <Route path="/brands" component={Brand} />
          <Route path="/singleProduct" component={ProductDetails} />
        </Switch>
      </div>
    )
  }


}
export default App
