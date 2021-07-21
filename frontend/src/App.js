import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';


export default function App() {
   
    return (
        <BrowserRouter>
        <Container maxWidth="xl">
            <Navbar />
                <Switch>
                <Route exact path="/" component={()=><Redirect to="/posts" />} />
                <Route exact path="/posts" component={Home} />
                <Route exact path="/posts/search" component={Home} />
                <Route exact path="/posts/:id" component={PostDetails} />
                <Route exact path="/auth" component={Auth} />
                </Switch>
        </Container>
         </BrowserRouter>
    );
};
