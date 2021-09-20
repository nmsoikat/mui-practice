import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Grid, IconButton, InputBase, TextField } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatIcon from "@mui/icons-material/Chat";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    "&.MuiPaper-root": {
      backgroundColor: "#fff",
      transform: "translateZ(0)",
    },
  },

  searchInput: {
    opacity: 0.6,
    fontSize: "0.8rem",
    padding: `0 ${theme.spacing(2)}px`,
    borderRadius: "15px",

    "&:hover": {
      backgroundColor: "#f2f2f2",
    },

    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              className={classes.searchInput}
              startAdornment={<SearchIcon />}
              placeholder="type here"
            />
          </Grid>
          <Grid item sm />
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <NotificationsActiveIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ChatIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
