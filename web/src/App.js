import "./App.css";
import Header from "./components/header";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import { Mic } from "@mui/icons-material";
import Dictaphone from "./components/Dictaphone";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [pass, setPass] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <Dictaphone isOn={pass} />
        <div style={{ top: "50%", position: "absolute", right: "0%" }}>
          <IconButton onClick={() => setPass(!pass)}>
            <Mic style={{ width: "200px", height: "200px" }} />
          </IconButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
