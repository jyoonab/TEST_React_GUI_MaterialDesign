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

import { CustomResult, CustomSnackBar } from '../CardContent';
import Icon from '../CustomIcon';
import IconButton from '@material-ui/core/IconButton';
import * as action from '../Action';

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

class CustomCommandInput extends Component {
  constructor(props){
    super(props);

    this.state={
      textInfo: {
        command: "",
        regex: ".*",
        result: [],
      },
      regexToggle: false,
      saveResult: "",
      toggleSnackBar: false,
    }
  }

  startTest = async () => {
    let responseJson = await action.requestPOST(this.state.textInfo.command, 'http://localhost:5000/command', {"foo": "foo"});
    //let responseJson = await action.addDocument(this.state.textInfo.command);

    this.setState({
      textInfo: {
        command: this.state.textInfo.command,
        regex: this.state.textInfo.regex,
        result: responseJson,
      },
    });
  }

  saveAlias = async () => {
    this.CustomSnackBar.toggleSnackBar();
    //let responseJson = await action.requestPOST(this.state.textInfo.command, 'http://localhost:5000/save', {"foo": "foo"});
    let responseJson = await action.addDocument(this.state.textInfo.command);
    window.location.reload();
  }

  clearText = () => {
    this.setState({
      textInfo: {
        command: "",
        regex: this.state.regexToggle ? "" : this.state.textInfo.regex,
        result: [],
      },
    });
  }

  changeText = (e, field) => {
    if(field === "command")
    {
      this.setState({
        textInfo: {
          command: e,
          regex: this.state.textInfo.regex,
          result: this.state.textInfo.result,
        },
      });
    }
    else if(field === "regex")
    {
      this.setState({
        textInfo: {
          command: this.state.textInfo.command,
          regex: e,
          result: this.state.textInfo.result,
        },
        //regex: new RegExp(`^((?!${e}).)*$` ,"g"),
        ///^((?!.*google.com.*).)*$/
      });
    }
  }

  toggleRegex = () => {
    this.setState({
      regexToggle: !this.state.regexToggle,
    });
  }

  getList = async () => {
    let responseJson = await action.getAllList();
  }

  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={0}>
        <form className={classes.root}>
          <TextField id="standard-basic" value={this.state.textInfo.command} onChange={(e) => this.changeText(e.target.value, "command")} label="Command" autoComplete='off' style={{marginRight: '3%', width: '90%'}}/>
        </form>
        <form>
          <TextField id="standard-basic" value={this.state.textInfo.regex} onChange={(e) => this.changeText(e.target.value, "regex")} label="Regex" autoComplete='off' style={Object.assign({}, {width: 0, opacity: 0, transition: '.5s all'}, this.state.regexToggle && {width: '90%', opacity: 1})}/>
        </form>
        <form className={classes.root} style={{marginBottom: '5%'}}>
          <IconButton onClick={() => this.toggleRegex()} style={{margin: 0, color:'#2a4a33'}}>
            {<Icon value={'fa fa-search'} size={15} color={this.state.regexToggle ? 'green' : 'grey'}/>}
          </IconButton>
          <IconButton onClick={() => this.saveAlias()} style={{margin: 0, color:'#2a4a33'}}>
            {<Icon value={'fa fa-save'} size={15} color={'#81a388'}/>}
          </IconButton>
          <IconButton onClick={() => this.getList()} style={{margin: 0, color:'#2a4a33'}}>
            {<Icon value={'fa fa-coffee'} size={15} color={this.state.regexToggle ? 'green' : 'grey'}/>}
          </IconButton>
          <Button onClick={() => this.startTest()} style={{margin: 20, color:'#427568'}}>
            Test Now
          </Button>
          <Button onClick={() => this.clearText()} style={{margin: 20, color:'#822671'}}>
            Clear
          </Button>
        </form>
        <CustomResult result={this.state.textInfo.result} regex={this.state.regexToggle ? this.state.textInfo.regex : '.*'}/>
        <CustomSnackBar message = "Save Finished" ref = {(ref)=>this.CustomSnackBar=ref}/>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CustomCommandInput)
