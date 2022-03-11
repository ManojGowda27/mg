import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(http://blogs.smithsonianmag.com/science/files/2013/01/superman-virtual-reality-470.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>Pioneered an ecommerce application based on MVC architecture to help users buy protein supplements as per nutritional diet.</CardText>
          <CardActions border>
            <Button colored href="https://github.com/ManojGowda27/Superhuman">Github</Button>
            
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(data:image/png;base64,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) center / cover",
            }}
          ></CardTitle>
          <CardText>Formulated an innovative algorithm using Random Forest for predicting subscriber or customer using location & frequency with 88%
accuracy</CardText>
          <CardActions border>
            <Button colored href="https://github.com/ManojGowda27/citibike_user_prediction">Github</Button>
            
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://sod.pixlab.io/images/out_plate.png) center / cover",
            }}
          ></CardTitle>
          <CardText>Implemented license plate recognition using a custom YOLOv3 Object Detector, OpenCV, and Tesseract OCR.</CardText>
          <CardActions border>
            <Button colored href="https://github.com/ManojGowda27/License-Plate-Detection">Github</Button>
            
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects uses MongoDB</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(TabId) => this.setState({ activeTab: TabId })}
          ripple
        >
          <Tab>Super Human Project</Tab>
          <Tab>Citibike User Prediction</Tab>
          <Tab>License Plate Detection</Tab>
          <Tab></Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
