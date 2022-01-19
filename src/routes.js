import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/home' component={HomeScreen} />
                <Route exact path='/about' component={AboutScreen} />
                <Route exact path='/contact' component={ContactScreen} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;