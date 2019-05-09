import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from '@material-ui/core/Badge';
import CartIcon from '@material-ui/icons/ShoppingCart';
import User from './User'
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


import './style.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends Component {

  

  render(){
  return (
    <div >
      <div className="topNav">

        <Navbar expand="lg" bg="topNav">
          <div className="container">
            <div className="col-md-2 ">
              <Link to="/" style={{color:"#fff"}}>
                The walking
            </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </div>
            <div className="col-md-7">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/" style={{color:"#fff", marginRight:20}}>Home</Link>
                <Link to="/products" style={{color:"#fff", marginRight:20}}>Products</Link>
                <Link to="/brands" style={{color:"#fff", marginRight:20}}>Brands</Link>
                </Nav>

              </Navbar.Collapse>
            </div>

            <User isSignedIn={this.props.isSignedIn} />
            <div className="col-md-2">
              <a>
                <Badge badgeContent={this.props.cartItems.length} color="primary">
                  <Link to="/cart" >
                    <CartIcon style={{ fontSize: 25, color:"#fff" }} className="cartIcon" />
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
    isSignedIn: state.global.signedIn,
    cartItems: state.cart.cartItems
  }
}

export default connect(mapStateToProps)(Header);
