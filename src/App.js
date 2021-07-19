import React from 'react'
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import {Register} from './components/Pages/Register';
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={Register} />
                    <Route component={Error} />
                </Switch>
            </Router>

        </>
    )
}

export default App;













