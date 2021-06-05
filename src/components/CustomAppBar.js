import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// prop
//

class CustomAppBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {this.props.title ? this.props.title : 'Material Dashboard'}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

/*
const useStyles = theme => ({
  appBar: {
    width: `calc(100% - ${0}px)`,
    marginLeft: props => props.drawerWidth,
  },
});
*/


export default CustomAppBar
