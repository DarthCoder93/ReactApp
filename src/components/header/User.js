import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import userImgUrl from './user.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from 'firebase'
import { AUTH_STATE_CHANGED } from '../../reducers/global'
import store, { history } from '../../store'

import './style.css'

class User extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        console.log("handleClick")
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        console.log("handleClose")
        this.setState({ anchorEl: null });
    };

    logOutHandle = () => {
        console.log("logOutHandle")

        firebase.auth().signOut().then(function () {
            store.dispatch({ type: AUTH_STATE_CHANGED, isSignedIn:false })
            history.push("/")

        })


    }


    render() {
        if (!this.props.isSignedIn) {
            return (

                <div className="col-md-1">
                    <Button color="#fff" component={Link} to="/authenticate" style={{ backgroundColor: "#fff" }}>Login</Button>
                </div>

            );
        } else {
            return (

                <div className="col-md-1">
                    <a >
                        <Avatar
                            onClick={this.handleClick}
                            aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                            style={{ width: 25, height: 25 }} src={userImgUrl} />
                    </a>


                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.logOutHandle}>Logout</MenuItem>
                    </Menu>
                </div>

            );
        }
    }
}


export default User;
