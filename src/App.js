import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './components/CustomDrawer';
import {Dashboard, One, Two, Three, Four, Five} from './pages';

import { BrowserRouter, Route } from 'react-router-dom';

import PageInfo from './data/PageInfo';

//$ npm install --save react-router-dom



class App extends Component{
  constructor(){
    super();
    this.state = {
      drawerWidth: 240,
    }
  }
  render(){
    const { classes } = this.props;
    return(
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <Drawer drawerWidth={this.state.drawerWidth}/>
          <main className={classes.main}>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/one" component={One}/>
            <Route exact path="/two" component={Two}/>
            <Route exact path="/three" component={Three}/>
            <Route exact path="/four" component={Four}/>
            <Route exact path="/five" component={Five}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  main: {
    flexGrow: 1,
    backgroundColor: '#ededed',
    padding: theme.spacing(3),
    height: '100%',
    minHeight: '100vh',
  },
});

export default withStyles(useStyles)(App)
