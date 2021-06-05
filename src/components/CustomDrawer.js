import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Icon from './CustomIcon';

import { Link } from 'react-router-dom';

import PageInfo from '../data/PageInfo';


// prop
// 1. drawerWidth 2. list


class CustomDrawer extends Component {
  constructor(args){
    super();
  }

  handleClicked(input){
    console.log(input);
  }

  render(){
    const { classes } = this.props;
    return(
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        PaperProps={{ elevation: 10 }}
      >
        <div className={classes.toolbar} />
        <Typography variant="h6" align="center" noWrap style={{ marginBottom: 20 }}>
          JS TOOL
        </Typography>
        <Divider className={classes.divider} />
        <List>
          {PageInfo.map((element, index) => (
            <Link to={element.URLIndex} style={{ textDecoration: 'none', color: 'black' }} key={index}>
              <ListItem button key={element.menuItem} onClick={() => this.handleClicked(index)}>
                <ListItemIcon><Icon value={element.icon}/></ListItemIcon>
                <ListItemText primary={element.menuItem} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider className={classes.divider} />
      </Drawer>
    );
  }
}

const useStyles = theme => ({
  drawer: {
    width: props => props.drawerWidth,
    flexShrink: 0,
  },
  divider: {
    marginLeft:'10%',
    marginRight:'10%',
  },
  drawerPaper: {
    width: props => props.drawerWidth,
    backgroundColor: '#f2eded',
  },
  toolbar: { marginTop: 20 },
});

export default withStyles(useStyles)(CustomDrawer)
