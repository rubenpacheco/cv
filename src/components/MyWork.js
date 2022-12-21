import mockData from "../mockData"
import {Link, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'


const MyWork = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={ `${classes.section} ${dark && classes.sectiondark}`} >
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography> 
          <Grid container className={classes.grid}>
            {
              mockData.map(({title, image, link},index)=>(
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia image={image} className={classes.caratula} titulo="caratula"/>
                    <CardContent>
                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                        {title}
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </div>
    </div>
  ) 
}

const useStyles = makeStyles((theme) => ({
 
  section: {
    minHeight: "100vh",
  },
  sectiondark:{
    background: "#333",
    color:  "#fff",
  },
  sectioncontent:{
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(5),
  },
  grid:{
    marginTop: theme.spacing(3),
  },
  card:{
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },
  caratula:{
    height: 0, 
    paddingTop: '56.25%',
  },
}))

export default MyWork