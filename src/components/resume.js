import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={3}>
            <div style={{ textAlign: "center" }}>
              <img
                src={process.env.PUBLIC_URL + "/images/avatar.png"}
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2
              style={{
                paddingTop: "0.5em",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              Manoj Gowda
            </h2>
            
            <hr style={{ borderTop: "3px solid grey", width: "100%" }} />
            
            <h5 style={{ textAlign: "center", fontFamily: "Pacifico" }}>
              Address
            </h5>
            <p>
            <p style={{ textAlign: "center" }}>Lowell MA</p> 
            </p>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "Pacifico",
                }}
            >
            
              e-mail
            </h5>
            <p style={{ textAlign: "center" }}>vmanojgowda27@gmail.com</p>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "Pacifico",
                
              }}
            >
              Web
            </h5>
            <p style={{ textAlign: "center" }}>https://mg2705.herokuapp.com</p>
          </Cell>
          <Cell col={9} className="resume-right-col">
            <h2 style={{ fontFamily: "Pacifico" }}>Education</h2>
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
         

            <Education
              startYear={2021}
              endYear={2023}
              schoolName="University of Massachusetts, Lowell"
              schoolDescription="MS in Computer Science  -  3.8/4.0"
            />

            <Education
              startYear={2017}
              endYear={2021}
              schoolName="S.J.B Institute of Technology"
              schoolDescription="B.E. in Information Science  -  3.0/4.0"
            />

            <h2 style={{ fontFamily: "Pacifico" }}>Experience</h2>
            
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
            <Experience
              startYear={2020}
              endYear={2021}
              jobName=" InfoTrack Telematics PVT LTD "
              jobDescription="Software Developer Intern - Spearhead a logistics web application using JavaScript and Jquery that provides deployed truck informational views and access to relevant tolls and reports to streamline activites by 40%. Achieved performance improvement of 70% by replacing and integrating Jquery over legacy code. Remodeled live chat interface using SaSS for a 50% increase in client interaction. "
            />
            <h2 style={{ fontFamily: "Pacifico" }}>Skills</h2>
            
            <hr style={{ borderTop: "3px solid white" }} />

            <Experience
              jobName=" Programming Languages "
              jobDescription=" JavaScript | Python | HTML5 | CSS3 | SaSS "
            />

            <Experience
              jobName=" Web Technologies "
              jobDescription=" Node | Express | React  "
            />

            <Experience
              jobName=" DataBase "
              jobDescription=" MySQL | MongoDB | Firebase  "
            />

            <Experience
              jobName=" IDE "
              jobDescription=" Visual Studio Code | JupyterNotebook "
            />

            <Experience
              jobName=" Platforms "
              jobDescription=" Git | GitHub | Heroku "
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
