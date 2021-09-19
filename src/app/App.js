import SideMenu from "../components/SideMenu";
import "./App.css";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";

const useStyle = makeStyles({
  main: {
    paddingLeft: "230px",
  },
});

function App() {
  const classes = useStyle();
  return (
    <div>
      <SideMenu />
      <div className={classes.main}>
        <Header />
      </div>
    </div>
  );
}

export default App;
