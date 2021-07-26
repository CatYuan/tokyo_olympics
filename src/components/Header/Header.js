import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.div}>
            <Link to="/">
              <img
                src="olympic_vector.png"
                alt="logo"
                className={classes.logo}
              />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" className={classes.title}>
                2020 Tokyo Olympics
              </Typography>
            </Link>
          </div>
          <div>
            <Link to="/countries" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>Countries</Button>
            </Link>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <Button className={classes.button}>Events</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
