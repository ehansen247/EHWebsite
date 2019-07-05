import React from 'react';
import Homepage from "./homepage";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
     </Switch>
)

export default Main;