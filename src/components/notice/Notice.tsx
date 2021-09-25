import React from 'react'; 
import ErrorIcon from '@material-ui/icons//Error';
import {Card, makeStyles, Theme, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.warning.light, 
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing(1),
    color: 'red'
  },
  noticeText: {
    display: 'flex', 
    flexDirection: 'column'
  },
  important: {
    color: 'red',
    fontWeight: 'bold'
  }
}))

export const Notice: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ErrorIcon  className={classes.icon}/>
      <div className={classes.noticeText}>
      <Typography className={classes.important} variant='caption'>This is not affiliated with <a rel="noreferrer" target='_blank' href={'https://www.coronavirus.gov.hk'}>coronavirus.gov.hk</a></Typography>
      <Typography className={classes.important} variant='caption'>Hotel information is extracted from above source, valid until 30 Nov 2021 (5th Cycle) <a rel="noreferrer" target='_blank' href={'https://www.coronavirus.gov.hk/pdf/designated-hotel-list-v5_en.pdf'}>source (PDF)</a></Typography> 
      </div>
    </Card>
  )
}