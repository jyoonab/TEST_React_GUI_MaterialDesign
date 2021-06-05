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

import { CustomTable, CustomText, CustomAdvancedInput, CustomCommandInput, CustomAPIInput } from '../CardContent';
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
    top: -80,
    zIndex: 2,
  },
  content: {
    position: 'relative',
    top: 80,
    marginBottom: 100,
  },
  square: {
    width: '90%',
    height: 100,
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
    position: 'relative',
    top: 80,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer:{
    position: 'relative',
    bottom: '10%'
  },
  button: {
    marginLeft: 20,
    position: 'relative',
    bottom: '10%'
  },
});

class CustomDetailedCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;

    return (
      <div style={{height: '100%', width: '100%', margin: 20, minWidth: 500, marginBottom: 40}}>
        <Paper style={{backgroundColor: this.props.element.color, display: 'flex', justifyContent: 'left', alignItems: 'center'}} className={classes.square} elevation={6}>
          <CustomText text={this.props.element.headMainText} subText={this.props.element.headSubText} color='white'/>
        </Paper>
        <Card className={classes.root}>
          <div className={classes.content}>
            <CardContent>
              {(this.props.element.type === 1) && (<CustomTable data={AliasDB}/>)}
              {(this.props.element.type === 2) && (<CustomTable data={TableDB}/>)}
              {(this.props.element.type === 4) && (<CustomCommandInput/>)}
              {(this.props.element.type === 5) && (<CustomAPIInput/>)}
              {(this.props.element.type === 6) && (<CustomAdvancedInput/>)}
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}


export default withStyles(useStyles)(CustomDetailedCard)
