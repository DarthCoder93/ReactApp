import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Avatar from '@material-ui/core/Avatar';
import userImgUrl from './user.png'

import './style.css'

function User(props) {
    if (!props.isSignedIn) {
        return (

            <div className="col-md-2">
               <Link to="/authenticate"> <button variant="outlined" href="#outlined-buttons" >
                    Sign In
      </button></Link>
            </div>

        );
    } else {
        return (

            <div className="col-md-2">
                <a >
                    <Avatar style={{ width: 25, height: 25 }} src={userImgUrl} />
                </a>
            </div>

        );
    }
}

export default User;
