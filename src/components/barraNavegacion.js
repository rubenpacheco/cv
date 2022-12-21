import { Toolbar,List, makeStyles, AppBar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from "../images/logomenu.png"
import { Link, animateScroll as scroll } from 'react-scroll'
import  InfoTwoToneIcon  from '@material-ui/icons/InfoTwoTone'
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react"
import CancelIcon from "@material-ui/icons/Cancel"



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const links = [
    {
      id: "about",
      text: "About me",
      icon: <InfoTwoToneIcon fontSize="large"/>
    },
    {
      id:"skills",
      text:"Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light}/>
    },
    {
      id:"work",
      text:"My Work",
      icon: <BuildTwoToneIcon fontSize="large"/>
    },
    {
      id:"contact",
      text:"Get in touch",
      icon: <ContactMailTwoToneIcon fontSize="large"/>
    },
  
  ]

  return (
    <>
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt="logo"/>
        <List className={classes.menu}>
          {
            links.map(({id, text}, index) => (
             <Link key={index} 
                   to={id} 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   /*offset es para que no se esconda el texto*/
                   offset={-60}>
                    {text}</Link>
            ))
          }
        </List>
        <IconButton edge="end" 
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
        >
          <MenuIcon fontSize="large"/>  
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={() => setOpen (false)}>
          <IconButton  onClick={()=>setOpen(false)} className={classes.cancelicon}>
            <CancelIcon fontSize="large"/>
          </IconButton>
          <Divider/>
          {
            links.map(({id, text, icon}, index) => (
             <Link key={index} 
                   className={classes.sidebar}
                   to={id} 
                   spy={true} 
                   activeClass="active"
                   smooth={true} 
                   duration={500} 
                   /*offset es para que no se esconda el texto*/
                   offset={-60}>                    
                    <ListItem component="h5">
                      <span>
                        <ListItemIcon>
                          {icon}
                        </ListItemIcon>
                      </span>{text}
                    </ListItem>
                    </Link>
            ))
          }
    </Drawer>
    </>
 )
}

const useStyles = makeStyles((theme) => ({
  root:{//barra menu
    backgroundColor: "#fafafa", //color de la barra
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  
  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  logo:{ 
    height: "2.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor:"pointer"
    }
  },
  light: {
    color: "#ffcc00",
  },
  menu:{
    [theme.breakpoints.down("sm")]:{
        display:"none"
    },
    "& a":{
      color:"	#333",
      fontSize: "1.rem",
      fontWeight:"bold",
      marginLeft:theme.spacing(3)
    },
    "& a:hover": {
      cursor: "pointer",
      color: "tomato",
      borderBottom: " 3px solid tomato",
    }
  },
  menubutton:{
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
    }    
  },
  cancelicon: {
    color: "tomato",
    position: "absolute",
    top: 0,
    right: 10,
  },
  sidebar:{
    width: "50vw",
    [theme.breakpoints.down("sm")]:{
      with:"60vw",
    },
    "& h5":{
      margin: theme.spacing(4, 0 ,0 ,2),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight:"bold"
    },
    "& h5:hover":{
      color:"tomato",
      cursor:"pointer"
      //aqui creamos color y cursor
    }
  }
}))


export default barraNavegacion;