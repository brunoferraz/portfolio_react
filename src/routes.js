import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

const Routes = (props)=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <PortfolioScreen screenQuery={props.screenQuery} />
                </Route>
                <Route exact path='/home' component={HomeScreen} />
                <Route exact path='/about' component={AboutScreen} />
                <Route exact path='/portfolio'>
                    <PortfolioScreen screenQuery={props.screenQuery} />
                </Route>
                <Route exact path='/contact' component={ContactScreen} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;