import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';

const useStyles = Theme => ({
  root: {
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
  },
  regexFieldEnabled: {
    width: '90%',
  },
  regexFieldDisabled: {
    width: 0,
    transition: '.25s all',
  },
});

class CustomSnackBar extends Component {
  constructor(props){
    super(props);

    this.state={
      toggleSnackBar: false,
    }
  }

  toggleSnackBar = () => {
    this.setState({
      toggleSnackBar: !this.state.toggleSnackBar,
    });
  }

  handleClose = () => {
    this.setState({
      toggleSnackBar: false,
    });
  }

  render(){
    const { classes } = this.props;
    return(
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.toggleSnackBar}
          onClose={() => this.handleClose()}
          autoHideDuration={6000}
          message={this.props.message}
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(CustomSnackBar)
