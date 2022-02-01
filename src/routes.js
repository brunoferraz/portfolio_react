import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
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
                <Route exact path='/contact'>
                    <ContactScreen  screenQuery={props.screenQuery} />
                </Route>
                <Route exact path='/project/:id'>
                    <ProjectScreen  screenQuery={props.screenQuery}/>
                </Route>
                <Route path='*'>
                    <NotFoundScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;