import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import {Link, withRouter} from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"><img id="logo" src="olympic_vector.png" alt="logo" className={classes.logo} /></Link>
          <Typography variant="h6" className={classes.title}>
            2020 Tokyo Olympics
          </Typography>
          <Link to="/countries" style={{ textDecoration: 'none' }}><Button color="#fff">Countries</Button></Link>
          <Link to="/events" style={{ textDecoration: 'none' }}><Button>Events</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
