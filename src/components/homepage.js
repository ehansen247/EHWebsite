import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import avatar from "./maleavatar.jpg"

class Homepage extends Component {
    render () {
        return (
            <div style = {{width: "100%", margin: "auto"}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src= {avatar}
                        alt="failed"
                        className="avatar-img"
                        />
                    </Cell>

                    <div class="banner-background" id="homepage-div">
                        <h1>Computer Science Student</h1>
                        <h3>Harvard College 2022</h3>

                        <hr></hr>

                        <h4>Python | Java | HTML/CSS | React | SQL | OCaml </h4>

                        <div className="social-links">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/eric-hansen-2022/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/ehansen247" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                    </div>

                    </div>

                </Grid>
            </div>
        );
    }
}

export default Homepage;