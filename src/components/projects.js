import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon, IconButton} from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            activeTab: 0,
            liveDemo: false,
            projNum: 0
        };

        // Tabs by Projects
        this.projectGrid = [
            ["https://ehansen247.github.io/ReactGames/", 
            "https://ehansen247.github.io/ReactGames/ticTacToe.html"]
        ]
    }

    render () {
        return (
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} 
                      onChange={(tabId) => this.setState({activeTab: tabId, liveDemo: false})} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>SQL</Tab>
                </Tabs>
                <section className="projects-grid">
                    {this.displayContent()}
                </section>
            </div>
        );
    }

    backToProjects = () =>
    {
        this.setState({
            liveDemo: false
        });
    }

    

    displayContent = () =>
    {
        if (!this.state.liveDemo) {
            return this.toggleTabs();
        }
        else {
            const link = this.projectGrid[this.state.activeTab][this.state.projNum];
            return (
                <div style={{margin: "20px"}}>
                    <div class="banner-background" style={{maxWidth: "600px", paddingTop: "20px"}}>
                        <span style={{display: "inline-block"}} ><button onClick={this.backToProjects}>&#60;</button></span>
                        <span style={{display: "inline-block"}} >
                            <p style={{fontSize: "15px"}}>&nbsp;Back to Projects &emsp; &emsp;|&emsp; &emsp;Open in Github Pages&nbsp;</p>
                        </span>
                        <span style={{display: "inline-block"}}>
                            <a href={link}>
                                <button>&#62;</button>
                            </a>
                        </span>
                    </div>
                    
                    <hr/>
                    <div style={{textAlign: "center"}}>
                        <iframe height="670px" width="800px"
                        src={link}
                        style={{background: "white"}}></iframe>
                    </div>
                </div>
                
            )
        }
    }

    toggleTabs = () =>
    {
        var disp = <h1>None</h1>
        if(this.state.activeTab === 0)
        {
            disp = 
                <div style={{display: "flex"}}>
                    <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                        <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                            <h3 style={{marginTop: "120px", fontWeight: "bold"}}>Inspire</h3>
                        </CardTitle>
                        <CardText >
                            Generate random quotes from a database of over 4,000! 
                        </CardText>
                        <CardActions class="card-action" border>
                            {/* <Button colored>LiveDemo</Button> */}
                            <Button colored href="https://github.com/ehansen247/Inspire">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton onClick={this.triggerShare} name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                        <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                            <h3 style={{marginTop: "120px", fontWeight: "bold"}}>Connect Four</h3>
                        </CardTitle>
                        <CardText >
                            Play Connect4 online against a friend!
                        </CardText>
                        <CardActions class="card-action" border>
                            <Button colored onClick={() =>this.setState({liveDemo: true, projNum: 0})}>LiveDemo</Button>
                            <Button colored href="https://github.com/ehansen247/ReactGames">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton onClick={this.triggerShare} name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                        <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                            <h3 style={{marginTop: "120px", fontWeight: "bold"}}>TicTacToe</h3>
                        </CardTitle>
                        <CardText >
                            Play TicTacToe against a friend or take on the computer!
                        </CardText>
                        <CardActions class="card-action" border>
                            <Button colored onClick={() =>this.setState({liveDemo: true, projNum: 1})}>LiveDemo</Button>
                            <Button colored href="https://github.com/ehansen247/ReactGames">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton onClick={this.triggerShare} name="share" />
                        </CardMenu>
                    </Card>
                </div>
                
        }
        if(this.state.activeTab === 1)
        {
            disp = 
                <div style={{display: "flex"}}>
                    <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                        <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                            <h3 style={{marginTop: "120px", fontWeight: "bold"}}>Chess Applet</h3>
                        </CardTitle>
                        <CardText >
                            Fully functional, graphics-based Chess program. Play against a friend!
                        </CardText>
                        <CardActions class="card-action" border>
                            {/* <Button colored>LiveDemo</Button> */}
                            <Button colored href="https://github.com/ehansen247/JavaChessGame">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton onClick={this.triggerShare} name="share" />
                        </CardMenu>
                    </Card>
                </div>
        }
        if(this.state.activeTab === 2)
        {
            disp =  
            <div style={{display: "flex"}}>
                <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                        <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                            <h3 style={{marginTop: "120px", fontWeight: "bold"}}>CS50 Finance</h3>
                        </CardTitle>
                        <CardText >
                            Buy and Sell Virtual Stocks!
                        </CardText>
                        <CardActions class="card-action" border>
                            {/* <Button colored>LiveDemo</Button> */}
                            <Button colored href="https://github.com/ehansen247/CS50Finance">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:"#fff"}}>
                            <IconButton onClick={this.triggerShare} name="share" />
                        </CardMenu>
                    </Card>
            </div>
        }
        if(this.state.activeTab === 3)
        {
            disp = 
            <div style={{display: "flex"}}>
                <Card shadow={20} style={{width: "300px", margin: "40px"}}>
                    <CardTitle expand border style={{height: "150px", background: "teal bottom left 15%"}}>
                        <h3 style={{marginTop: "120px", fontWeight: "bold"}}>Inspire</h3>
                    </CardTitle>
                    <CardText >
                        Generate random quotes from a database of over 4,000! 
                    </CardText>
                    <CardActions class="card-action" border>
                        {/* <Button colored>LiveDemo</Button> */}
                        <Button colored href="https://github.com/ehansen247/Inspire">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton onClick={this.triggerShare} name="share" />
                    </CardMenu>
                </Card>
            </div>
        }
        return disp;

    }
    
}

export default Projects;