import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import Barra from "./components/Barra";
import Acerca from "./components/Acerca";//Acerca
import Habilidad from "./components/Habilidad";//habilidades
import Mitrabajo from "./components/Mitrabajo";//Mitrabajo
import Contactame from "./components/Contactame";//contactame
import { purple } from "@material-ui/core/colors";
import './components/styles/estilo.css'

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
      <Barra />
      <Acerca title="Acerca de mi" id="Acerca" dark={true }/>
      <Habilidad title="Mi Viaje de Programacion" id="Habilidad" dark={false }/>
      <Mitrabajo title="Mi Trabajo" id="Mitrabajo" dark={true }/>
      <Contactame title="" id="Contactame" dark={false }/>
    </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{

   }
}))

export default App
