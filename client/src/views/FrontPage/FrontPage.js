import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "Components/Header/Header.js";
import Footer from "Components/Footer/Footer.js";
import GridContainer from "Components/Grid/GridContainer.js";
import GridItem from "Components/Grid/GridItem.js";
import Button from "Components/CustomButtons/Button.js";
import HeaderLinks from "Components/Header/HeaderLinks.js";
import Parallax from "Components/Parallax/Parallax.js";

import styles from "Assets/jss/material-kit-react/views/landingPage.js";
import "./FrontPage.css";
// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function FrontPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className="BackGroundImage">
        <div className="overlay">
          <h1 className={(classes.title, "heading_text")}>
            Fbn Media Group AS
          </h1>
          <h4 className="mail">fredrik@fbn-group.com</h4>
        </div>
        {/* <div className="moving-clouds-top"> </div> */}
        <div className="moving-clouds-bottom"> </div>
      </div>
    </div>
  );
}
