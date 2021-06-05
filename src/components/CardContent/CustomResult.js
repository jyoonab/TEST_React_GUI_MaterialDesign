import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';



const useStyles = Theme => ({
  root: {
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
  },
});

class CustomResult extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p style={{width: 50, position: 'relative', top: 0, zIndex: 3, marginLeft: 10, backgroundColor: 'white', color: '#c4c7cc'}}>Result</p>
        <Box border={1} borderColor="#c4c7cc" style={{position: 'relative', top: -25, zIndex: 2}}>
          <div>
            <CardContent>
              {(this.props.result.map(index => (new RegExp(this.props.regex).exec(index) &&
                <p style={{color: '#c4c7cc'}}>
                  {new RegExp(this.props.regex).exec(index)}<br/>
                </p>
              )))}
            </CardContent>
          </div>
        </Box>
      </div>
    );
  }
}

export default withStyles(useStyles)(CustomResult)
