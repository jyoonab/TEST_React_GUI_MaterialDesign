import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ReactDOM from 'react-dom';

import { CustomGraph, CustomText } from '../CardContent';
import AliasDB from '../../data/Alias';
import TableDB from '../../data/Table';

/*
Props 1. Title 2. Color 3. Icon
*/

const useStyles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    top: -180,
    zIndex: 2,
  },
  content: {
    position: 'relative',
    top: 180,
  },
  square: {
    width: '90%',
    height: 200,
    position: 'relative',
    top: 0,
    marginLeft: '5%',
    marginRight: '5%',
    zIndex: 3,
  },
  title: {
    fontSize: 14,
    position: 'relative',
    top: 80,
  },
  divider: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer:{
    position: 'relative',
    bottom: '10%'
  },
  button: {
    marginLeft: 20,
  },
});

class CustomGraphCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;

    return (
      <div style={{ height: 350, width: '90%', margin: 20, minWidth: 300, marginBottom: 40}}>
        <Paper style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={classes.square} elevation={6}>
          <CustomGraph backGroundColor={this.props.element.color}/>
        </Paper>
        <Card className={classes.root}>
          <div className={classes.content}>
            <CardContent>
              <CustomText text={this.props.element.headMainText} subText={this.props.element.headSubText}/>
            </CardContent>
            <Divider className={classes.divider}/>
            <CardActions>
              <Button className={classes.button} size="small">Learn More</Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}


export default withStyles(useStyles)(CustomGraphCard)
