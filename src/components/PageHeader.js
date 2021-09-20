import React from "react";
import { Paper, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },

  pageHeader: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
  },

  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),

    "& .MuiSvgIcon-root": {
      color: "#3c44b1",
    },
  },

  pageTitle: {
    paddingLeft: theme.spacing(2),

    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

function PageHeader({ title, subtitle, icon }) {
  const classes = useStyle();

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
