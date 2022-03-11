import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="tag-line">
              <h1>Manoj Gowda</h1>
              <hr />
              <div className="social-links">
                {/* Linked In */}
                <a
                  href="https://www.linkedin.com/in/manoj-gowda27"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://www.github.com/ManojGowda27"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </div>
              <p>
              From playing pinball to developing applications, computers have always stoked me. High school was where i was initially introduced to HTML, that very moment which bewitched me to pursue my career in the stream of Software Development. 
              Upgrading of my basic knowledge started when i joined college, where i felt that i was a tiny fish amongst others in a small pond paving my way towards ocean. The pavement made me learn a couple of things like introduction to Algorithms, Data Structures and many more which supplemented as boosters in driving towards my enthrallment. 
              I'm captivated to be a Full Stack Developer. Python, JavaScript, HTML, CSS, jQuery, NodeJS, ExpressJS, ReactJS, MongoDB are the arrows in my quiver. 
              As an engineer, I excel at being an eager beaver in adopting new skills to provide shrewd results. I am very elevated to be able to use my unique skills and want to show my dedication in developing world-class software solutions.
              </p>
              
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
