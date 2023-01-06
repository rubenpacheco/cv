import { makeStyles,Typography } from '@material-ui/core'
import { Technologies } from './Technologies';//aqui importamos tecnologi
import React from 'react'

const Habilidad = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={ `${classes.section} ${dark && classes.sectiondark}`} >
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Technologies>
          </Technologies>
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
}))

export default Habilidad