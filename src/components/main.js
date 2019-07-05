import React from 'react';
import Homepage from "./homepage";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/EHWebsite/" component={Homepage} />
        <Route exact path="/EHWebsite/about" component={About} />
        <Route exact path="/EHWebsite/projects" component={Projects} />
        <Route exact path="/EHWebsite/contact" component={Contact} />
     </Switch>
)

export default Main;