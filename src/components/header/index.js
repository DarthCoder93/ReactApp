import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from '@material-ui/core/Badge';
import CartIcon from '@material-ui/icons/ShoppingCart';
import User from './User'
import { Link } from "react-router-dom";

import './style.css'

class Header extends Component {

  

  render(){
  return (
    <div >
      <div className="topNav">

        <Navbar expand="lg" sticky='top' bg="topNav">
          <div className="container">
            <div className="col-md-2 topNav">
              <Link to="/">
                MobiileLab
            </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </div>
            <div className="col-md-7">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/brands">Brands</Link>
                </Nav>

              </Navbar.Collapse>
            </div>

            <User isSignedIn={this.props.isSignedIn} />
            <div className="col-md-1">
              <a>
                <Badge badgeContent={this.props.cartItems.length} color="primary">
                  <Link to="/cart" >
                    <CartIcon style={{ fontSize: 25 }} className="cartIcon" />
                  </Link>
                </Badge>
              </a>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
  }
}

const mapStateToProps = function(state) {
  return {
    isSignedIn: state.global.isSignedIn,
    cartItems: state.cart.cartItems
  }
}

export default connect(mapStateToProps)(Header);
