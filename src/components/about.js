import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div>
                {/* <div class="about-header">
                    <h2>About Me</h2>
                </div> */}
                <div class="banner-background" id="about-banner">
                    <p>Hey! I'm a sophomore studying Computer Science at Harvard University. 
                    I'm exploring statistics, economics, and philosophy as well. Within the field
                    of Computer Science, I've yet to choose an area of focus, but have background
                    in web programming, iOS App development, functional programming, and algorithmic
                    programming. I'm looking forward to studying Systems Security and Machine Learning
                    in the coming months.</p>
                </div>
            </div>
        );
    }
}

export default About;