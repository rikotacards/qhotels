import React from 'react'; 
import ErrorIcon from '@material-ui/icons//Error';
import {Card, makeStyles, Theme, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main, 
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}))

export const Notice: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ErrorIcon className={classes.icon}/>
      <Typography>This is not affiliated with</Typography> 
    </Card>
  )
}