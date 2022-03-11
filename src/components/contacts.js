import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Manoj Gowda</h3>
            <img
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116981913/original/b5970d9439f084f81a8955036fc6083ff5971902/big-head-cartoon-avatar.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Q: 0 is false and 1 is true, right?
            </p>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              A: 1
            </p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr />
            <div className="contact-list">
              <List>
                
                  <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Pacifico",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    vmanojgowda27@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Pacifico",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                    @vmanojgowda27
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
