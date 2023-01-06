import React from 'react'
import { Button ,Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import ruben from "../images/ruben.png"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/CV Ruben Dario Pacheco Guevara.pdf"

const Acerca = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={ `${classes.section} ${dark && classes.sectiondark}`} >
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia image={ruben} className={classes.media} title="picture"/>           
            <CardContent className={classes.cardcontent}>
              <TypeWriterEffect 
                text="Nombre:Ruben Dario Pacheco Guevara"
                textStyle={{fontSize:"2rem", fontWeight:"700px", color:"tomato" }}
                startDelay={100}
                cursorColor="black"
                typeSpeed={100}//tiempo
             />
             <TypeWriterEffect 
             text="Titulo:Bachiller de Ingeniería de Software "
             textStyle={{fontSize:"1.2rem", fontWeight:"500px"}}
             startDelay={2500}
             cursorColor="black"
             typeSpeed={100}//tiempo
             />
              <Typography variant="h6" color='textSecondary'>
              Soy una persona dinámica, proactiva, responsable con deseos de superación para
              lograr metas en base a esfuerzo y dedicación.
              Facilidad para trabajar en equipo, capacidad para interactuar con los demás,
              así como también para el trabajo bajo presión, 
              amplia disposición de trabajo y grado de confiabilidad. 
              </Typography>
            </CardContent>
              <CardActions>
                <Button variant="contained" className={classes.pdfbuton}>
                  <a href={pdf} download>
                  Decargar CV
                  </a>
                </Button>                
              </CardActions>  
          </Card>
        </div>
    </div>
  ) 
}

const useStyles = makeStyles((theme) => ({
  root:{
  },
  section: {
    minHeight: "100vh",
  },
  sectiondark:{
    background: "#333",
    color:  "#fff",
  },
  sectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card:{
    height: "70vh",
    display:"flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media:{
    width: "1000px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "20px",
    margin: theme.spacing(2)
  },
  cardcontent:{
    marginTop: theme.spacing(-1),
    "& h6":{
      marginTop: theme.spacing(5),
      //aqui damo la orden de desaperecer el texto en pantalla
      //pequeña
      [theme.breakpoints.down("sm")]:{
        display:"none",
      },
    },
  },
  pdfbuton:{
    position:"absolute",
    bottom: "5rem",
    right:"4rem",
    [theme.breakpoints.down("sm")]:{
      bottom: "1rem",
      right: "1rem",
    },
    backgroundColor:"tomato",
    padding: theme.spacing(3),
    "&:hover":{
        backgroundColor:"#fff",
    },
    "& a":{
        color:"#fff",
        textDecoration:"none",
        fontWeight:900,
    },
    "& a:hover":{
      color: "tomato",
    }
  },
}))


export default Acerca  