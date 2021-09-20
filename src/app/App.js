import SideMenu from "../components/SideMenu";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PageHeader from "../components/PageHeader";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040",
    },

    secondary: {
      main: "#900",
    },

    background: {
      default: "#f2f4f5",
    },
  },

  // overrides: {
  //   MuiAppBar: {
  //     root: {
  //       transform: "translateZ(0)",
  //     },
  //   },
  // },

  // props: {
  //   MuiIconButton: {
  //     disableRipple: true,
  //   },
  // },
});

const useStyle = makeStyles({
  main: {
    paddingLeft: "230px",
  },
});

function App() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.main}>
        <Header />
        <PageHeader
          title="This is title"
          subtitle="this is subtitle "
          icon={<SupervisorAccountTwoToneIcon fontSize="large" />}
        />
      </div>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
