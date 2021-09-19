import React from 'react'; 
import {Card, makeStyles, Theme, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.error.main, 
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))

export const Notice: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography>This is not affiliated with</Typography> 
    </Card>
  )
}