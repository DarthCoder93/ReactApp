import React from './node_modules/react';
import Navbar from './node_modules/react-bootstrap/Navbar';
import FormControl from './node_modules/react-bootstrap/FormControl';
import Button from './node_modules/react-bootstrap/Button';
import Nav from './node_modules/react-bootstrap/Nav';
import Avatar from './node_modules/@material-ui/core/Avatar';
import Badge from './node_modules/@material-ui/core/Badge';
import CartIcon from './node_modules/@material-ui/icons/ShoppingCart';
import userImgUrl from './user.png'

import './style.css'

function Header() {
  return (
    <div>
      <div class="topNav">
      <Navbar expand="lg" sticky='top' bg="topNav">
      <div class="col-md-4 topNav">
        <Navbar.Brand href="#home">Foodie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div class="col-md-6">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

        </div>

        <div class="col-md-1">
        <Avatar className="purpleAvatar" src={userImgUrl} />
        </div>
        <div class="col-md-1">
        <Badge  badgeContent={0} color="primary">
        <CartIcon />
      </Badge>
        </div>
        
      </Navbar>
      </div>
    </div>
  );
}

export default Header;
