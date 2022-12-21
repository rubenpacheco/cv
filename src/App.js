import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import barraNavegacion from "./components/barraNavegacion";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme( {
  palette:{
    primary:{main: purple[500]},
    secondary:{main: "#333"},
  }
})
function App() {
  const classes = useStyles(); 
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <barraNavegacion />
      <About title="Acerca de mi" id="about" dark={true }/>
      <Skills title="Mi Viaje de Programacion" id="skills" dark={false }/>
      <MyWork title="Mi Trabajo" id="work" dark={true }/>
      <Contact title="Ponerse" id="contact" dark={false }/>
    </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{

   }
}))

export default App;
