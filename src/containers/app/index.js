import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Cart from '../cart'
import Products from '../products'
import ProductDetails from '../productDetails'
import Brand from '../brands'
import SignIn from '../signIn'
import About from '../about'



import Header from '../../components/header';

const App = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route path="/authenticate" component={SignIn} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={Products} />
      <Route path="/brands" component={Brand } />
      <Route path="/singleProduct" component={ProductDetails} />
    </Switch>
  </div>
)

export default App
