import { useContext } from "react";
import { MainContext } from "./components/context/MainContext";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function App() {
  const { addTodo } = useContext(MainContext);

  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "monospace",
    paddingRight: 7,
    color: "#2962FF",
  };

  return (
    <div>
      <ThemeSwitcher />
      <Link
        href="https://usman2102.hashnode.dev/"
        target="_blank"
        style={channelLink}
      >
        Max Programming
      </Link>

      <br></br>

      <Link
        href="https://youtube.com/c/MaxProgramming"
        target="_blank"
        color="error"
        style={channelLink}
      >
        <YouTubeIcon style={{ color: "#FF0000" }} fontSize="large" />
      </Link>

      <Link
        href="https://twitter.com/MaxProgramming1"
        target="_blank"
        color="error"
        style={channelLink}
      >
        <TwitterIcon style={{ color: "#1CA0F2" }} fontSize="large" />
      </Link>

      <Link
        href="https://www.instagram.com/usmansabuwala7/"
        target="_blank"
        color="error"
        style={channelLink}
      >
        <InstagramIcon style={{ color: "#D42874" }} fontSize="large" />
      </Link>

      <AddTodo addTodo={addTodo} />

      <Todos />
    </div>
  );
}

export default App;
