import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../components/CustomAppBar';
import Row from '../components/CustomRow';

import RootRowInfo from '../data/RootRowInfo';


// prop
//

class root extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.content}>
        <AppBar drawerWidth={240}/>
        <Row rowInfo={RootRowInfo}/>
      </div>
    );
  }
}

const useStyles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
});

export default withStyles(useStyles)(root)
