import React, {useState, useEffect} from 'react'
import {AppBar, Avatar, Button, Toolbar, Typography  } from '@material-ui/core';
// import memoriesImg from '../../images/memories.png';
import memoriesLogoImg from '../../images/memoriesLogo.png';
import memoriesTextImg from '../../images/memoriesText.png';

import {Link, useHistory, useLocation} from "react-router-dom";
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../constants/actionTypes';
import decode from 'jwt-decode';


export default function Navbar() {
    const classes=useStyles();
    const [user, setUser]=useState( JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();
    const logout=()=>{
        dispatch({type:LOGOUT});
        setUser(null);
        history.push('/auth');
    };
    useEffect(()=>{
        const token=user?.token;
        if(token){
           const decodedToken=decode(token);
           if(decodedToken){
               if(decodedToken.exp * 1000 < new Date().getTime()){
                   logout();
               }
           }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
            <img  src={memoriesTextImg} alt="icon" height="45px" />
                <img className={classes.image} src={memoriesLogoImg} alt="icon" height="40px" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                     <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result?.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                    </div> 
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
