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

import Icon from '../CustomIcon';

/*
Props 1. Title 2. Color 3. Icon
*/

const useStyles = theme => ({
  root: {
    width: '100%',
    height: '80%',
    position: 'relative',
    backgroundColor: 'white',
    top: -80,
    zIndex: 2,
  },
  square: {
    width: 100,
    height: 100,
    position: 'relative',
    top: 0,
    marginLeft: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 14,
  },
  divider: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    marginLeft: 20,
  },
});

class CustomCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;

    return (
      <div style={{ height: 200, width: '90%', margin: 20, maxWidth: '100%', minWidth: 300}}>
        <Paper style={{backgroundColor: this.props.element.color, display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={classes.square} elevation={6}>
          <Icon value={this.props.element.icon} size={30} color='white'/>
        </Paper>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom align="right">
              {this.props.element.title}
            </Typography>
            <Typography variant="h5" component="h2" align="right">
              49/50 GB
            </Typography>
          </CardContent>
          <Divider className={classes.divider}/>
          <CardActions>
            <Button className={classes.button} size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default withStyles(useStyles)(CustomCard)
