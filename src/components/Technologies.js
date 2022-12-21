import React from 'react'
import cplusplus from "../images/cplusplus.png"
import html from "../images/html.png"
import css from "../images/css.png"
import javacript from "../images/javascript.png"
import react from "../images/react.png"
import redux from "../images/redux.png"
import { TimelineContent, TimelineConnector, Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@material-ui/lab"
import {makeStyles, Paper, Typography } from '@material-ui/core'
import StarRating from './StarRating'


export const Technologies = () => {
 const classes = useStyles()   
    const skills = [
        {
            year:"2010",
            src: cplusplus,
            title:"C++ Logic",
            stars:3,
        },
        {
            year:"2015",
            src: html,
            title:"HTML 5",
            stars:3,
        },
        {
            year:"2018",
            src: css,
            title:"CSS 3",
            stars:3,
        },
        {
            year:"2019",
            src: javacript,
            title:"Javascript ES6",
            stars:2,
        },
        {
            year:"2020",
            src: react,
            title:"React js",
            stars:4,
        },
        {
            year:"2020",
            src: redux,
            title:"React Redux",
            stars:1,
        },
    ]
      return (
    <Timeline align="left">
        {
            skills.map(({year, src, title,stars}, index) =>(
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="textSecondary">
                        {year}
                        </Typography>
                    </TimelineOppositeContent>
                        <TimelineSeparator>                          
                        <img src={src} alt={title} className={classes.customlogo}/>
                        <TimelineConnector/>
                        </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={6} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                    {title}
                                    </Typography>
                                    <StarRating stars={stars }/>
                                </Paper>
                            </TimelineContent>
                </TimelineItem>
            ))
        }
    </Timeline >
  )
}
const useStyles = makeStyles((theme) => ({
    customlogo:{
        width:"25px",  
     },
     paper:{
        padding:"6px 16px",
        maxWidth:"250px"
     }
  }))

export default Technologies
