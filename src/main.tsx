import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightGreen, yellow } from "@mui/material/colors";

const switchTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Iosevka",
      textTransform: "none",
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: yellow[500],
    },
    mode: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={switchTheme}>
    <App />
  </ThemeProvider>
);
