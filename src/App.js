import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import { Link } from "react-router-dom"
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Eric D. Hansen" scroll>
              <Navigation>
                  <Link to="/">Homepage</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Eric D. Hansen">
              <Navigation>
              <Link to="/">Homepage</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content className="body-color">
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
