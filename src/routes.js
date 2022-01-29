import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import ProjectScreen from "./screens/ProjectScreen";

const Routes = (props)=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <PortfolioScreen screenQuery={props.screenQuery} />
                </Route>
                <Route exact path='/home' component={HomeScreen} />
                <Route exact path='/about'>
                    <AboutScreen screenQuery={props.screenQuery}/>
                </Route>
                <Route exact path='/portfolio'>
                    <PortfolioScreen screenQuery={props.screenQuery} />
                </Route>
                <Route exact path='/contact' component={ContactScreen} />
                <Route exact path='/project/:id'>
                    <ProjectScreen  screenQuery={props.screenQuery}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;