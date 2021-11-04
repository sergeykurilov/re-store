import React, {Component} from 'react';
import './app.css';
import {Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

function App() {
    return (
        <main role="main" className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
        </main>
    )
}

export default App
