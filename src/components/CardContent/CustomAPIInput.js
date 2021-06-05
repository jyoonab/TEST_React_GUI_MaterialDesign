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

import APIType from '../../data/APIType';

import { CustomResult } from '../CardContent';
import * as action from '../Action';



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

class CustomAPIInput extends Component {
  constructor(props){
    super(props);

    this.state={
      textInfo: {
        url: "",
        regex: "",
        headers: "",
        result: [],
      },
      apiType: "Default",
      regexToggle: false,
      regex: "",
    }
  }

  startTest = async () => {
    console.log(this.state.textInfo.url);
    //let responseJson = await action.requestGet("http://dummy.restapiexample.com/api/v1/employees" ,{"foo": "foo"});
    let responseJson = await action.requestGet(this.state.textInfo.url ,{"foo": "foo"});

    this.setState({
      textInfo: {
        url: this.state.textInfo.url,
        regex: "",
        headers: this.state.textInfo.headers,
        result: JSON.stringify(responseJson).split('},'),
      },
    });
  }

  clearText = () => {
    this.setState({
      textInfo: {
        url: "",
        regex: "",
        headers: "",
        result: [],
      },
    });
  }

  changeText = (e, field) => {
    if(field === "url")
    {
      this.setState({
        textInfo: {
          url: e,
          regex: this.state.textInfo.regex,
          headers: this.state.textInfo.headers,
          result: this.state.textInfo.result,
        },
      });
    }
    else if(field === "regex")
    {
      this.setState({
        textInfo: {
          url: this.state.textInfo.url,
          regex: e,
          headers: this.state.textInfo.headers,
          result: this.state.textInfo.result,
        },
        regex: new RegExp(`^((?!${e}).)*$` ,"g"),
      });
    }
    else if(field === "headers")
    {
      this.setState({
        textInfo: {
          url: this.state.textInfo.url,
          regex: this.state.textInfo.regex,
          headers: e,
          result: this.state.textInfo.result,
        },
      });
    }
  }

  toggleRegex = () => {
    this.setState({
      regexToggle: !this.state.regexToggle,
    });
  }

  handleAPITypeChange = (event) => {
    this.setState({
      apiType: event,
    });
  };

  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={0}>
        <form className={classes.root}>
            <TextField
              id="standard-select-currency-native"
              select
              label="API Type"
              value={this.state.apiType}
              onChange={(e) => this.handleAPITypeChange(e.target.value)}
              SelectProps={{
                native: true,
              }}
              style={{
                minWidth: 80,
                width: '20%',
              }}
            >
              {APIType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
          </TextField>

          <TextField id="standard-basic" value={this.state.textInfo.url} onChange={(e) => this.changeText(e.target.value, "url")} label="URL" autoComplete='off' style={{marginRight: '3%', marginLeft: '3%', width: '74%'}}/>
        </form>
        <form>
          <TextField id="standard-basic" value={this.state.textInfo.headers} onChange={(e) => this.changeText(e.target.value, "headers")} label="Header" autoComplete='off' style={Object.assign({}, {width: 0, opacity: 0, transition: '.5s all'}, (this.state.apiType === "Digicert") && {width: '50%', opacity: 1})} multiline/>
        </form>
        <form>
          <TextField id="standard-basic" value={this.state.textInfo.regex} onChange={(e) => this.changeText(e.target.value, "regex")} label="Regex" autoComplete='off' style={Object.assign({}, {width: 0, opacity: 0, transition: '.5s all'}, this.state.regexToggle && {width: '90%', opacity: 1})}/>
        </form>
        <form className={classes.root} style={{marginBottom: '5%'}}>
          <Button onClick={() => this.toggleRegex()} style={{margin: 20, color:'#2a4a33'}}>
            {!this.state.regexToggle ? 'Toggle Adv Search' : 'Collapse Adv Search'}
          </Button>
          <Button onClick={() => this.startTest()} style={{margin: 20, color:'#427568'}}>
            Test Now
          </Button>
          <Button onClick={() => this.clearText()} style={{margin: 20, color:'#822671'}}>
            Clear
          </Button>
        </form>
        <CustomResult result={this.state.textInfo.result} regex={this.state.regex}/>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(CustomAPIInput)
