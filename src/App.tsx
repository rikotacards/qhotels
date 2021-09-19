import { AppBar, Toolbar, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { Notice } from './components/notice/Notice';
import { HotelsPage } from './pages/HotelsPages';

const useStyles = makeStyles((theme: Theme) => ({
  offset: theme.mixins.toolbar
}))
export const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.offset}>
          <Typography>
            Designated Quarantine Hotels (HK)
          </Typography>
        </Toolbar>
      </AppBar>
      
      <div className={classes.offset}/>
      <Notice/>
        <HotelsPage />
    </div>
  );
}

