import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';


export default function App() {
   
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />
                </Switch>
        </Container>
         </BrowserRouter>
    );
};
