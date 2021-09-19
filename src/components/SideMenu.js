import React from "react";
import { makeStyles, withStyles } from "@mui/styles";

// makeStyles({sideMenu: {...}})  // return a function
const styles = {
  sideMenu: {
    position: "absolute",
    width: "230px",
    height: "100%",
    backgroundColor: "#00478e",
    left: "0",
    top: "0",
  },
};

function SideMenu(props) {
  // const classes = useStyles(); // apply css
  const { classes } = props;

  return <div className={classes.sideMenu}>sdfsf</div>;
}

export default withStyles(styles)(SideMenu);
