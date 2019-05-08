import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import userImgUrl from './user.png'
import Button from '@material-ui/core/Button';

import './style.css'

function User(props) {
    if (!props.isSignedIn) {
        return (

            <div className="col-md-1">
                <Button color="#fff" component={Link} to="/authenticate"  style={{backgroundColor:"#fff"}}>Login</Button>
            </div>

        );
    } else {
        return (

            <div className="col-md-1">
                <a >
                    <Avatar style={{ width: 25, height: 25 }} src={userImgUrl} />
                </a>
            </div>

        );
    }
}

export default User;
