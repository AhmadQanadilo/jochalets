import { Routes, Route, HashRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import HeaderComponent from "./components/HeaderComponent";
import FarmDetailScreen from "./screens/FarmDetailScreen";
import Footer from "./components/Footer";
import FarmCreateScreen from "./screens/FarmCreateScreen";

export let myTheme = createTheme({
  palette: {
    primary: {
      main: "#317312",
    },
    secondary: {
      main: "#239AF7",
    },
    
    error:{
      main:"#E93912"
    },
    text: {
      primary: "#5d4037",
      secondary: "#3e2723",
    }
  },
  typography: {
    fontFamily: "'Harmattan', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontWeightBold: 900, // Roboto Condensed
  },
});

myTheme = responsiveFontSizes(myTheme);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        {/* <NavigationScroll>  add after configruing routes */}
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/JoAdmin" element={<FarmCreateScreen />} />
            <Route path="/:farmID" element={<FarmDetailScreen />} />
          </Routes>
          <Footer />
        </Router>
        {/* </NavigationScroll> */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
