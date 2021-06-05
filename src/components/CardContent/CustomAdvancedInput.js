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

import { CustomResult } from '../CardContent';
import Icon from '../CustomIcon';
import IconButton from '@material-ui/core/IconButton';
import * as action from '../Action';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CustomAliasTable from './CustomAliasTable';


const useStyles = Theme => ({
  root: {
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

class CustomAdvancedInput extends Component {
  constructor(props){
    super(props);

    this.state={
      textInfo: {
        command: "",
        regex: ".*",
        result: [],
      },
      regexToggle: false,
      aliasList: [],
      tab: 0,
      json: "",
    }
  }

  componentDidMount(){
    this.getList();
  }

  startTest = async () => {
    let responseJson = await action.requestPOST(this.state.textInfo.command, 'http://localhost:5000/companies', {"foo": "foo"});

    this.setState({
      textInfo: {
        command: this.state.textInfo.command,
        regex: this.state.textInfo.regex,
        result: responseJson,
      },
    });
  }

  clearText = () => {
    this.setState({
      textInfo: {
        command: "",
        regex: this.state.regexToggle ? "" : this.state.textInfo.regex,
        result: [],
      },
      json: "",
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
    else if(field === "json")
    {
      this.setState({
        json: e,
      });
    }
  }

  handleTabChange = (input) => {
    console.log(input);
    this.setState({
      tab: input,
    });
  }

  getList = async () => {
    let responseJson = await action.getAllList();

    this.setState({
      aliasList: responseJson['hits']['hits'],
    });

    console.log(this.state.aliasList);
  }

  deleteList = async (str) => {
    let responseJson = await action.deleteDocument('alias', 'string', str);

    await this.getList();

    console.log(responseJson);
  }

  render(){
    const { classes } = this.props;
    const tabColor = "#6b8f9c";

    return (
      <div>
        <Paper className={classes.root} elevation={0}>
          <form className={classes.root} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>
              <Tabs value={this.state.tab} TabIndicatorProps={{style: {backgroundColor: tabColor}}} centered>
                <Tab label="UI Form" onClick={(e) => this.handleTabChange(0)} style={{fontSize: 10, color: this.state.tab === 0 ? tabColor : 'grey'}}/>
                <Tab label="Regex Form" onClick={(e) => this.handleTabChange(1)} style={{fontSize: 10, color: this.state.tab === 1 ? tabColor : 'grey'}}/>
              </Tabs>
              {(this.state.tab === 0) &&
                (<TextField id="regex-input" value={this.state.json} onChange={(e) => this.changeText(e.target.value, "json")} multiline label="UI Form" autoComplete='off' variant="outlined" rows={10} InputLabelProps={{ shrink: true }} style={{marginTop: '3%', width: '90%', borderColor: 'green'}}/>
              )}
              {(this.state.tab === 1) &&
                (<TextField id="regex-input" value={this.state.json} onChange={(e) => this.changeText(e.target.value, "json")} multiline label="JSON" autoComplete='off' variant="outlined" rows={10} InputLabelProps={{ shrink: true }} style={{marginTop: '3%', width: '90%', borderColor: 'green'}}/>
              )}
            </div>
            <div style={{width: '50%'}}><CustomAliasTable data={this.state.aliasList} deleteDoc={this.deleteList}/></div>
          </form>
          <form className={classes.root} style={{marginBottom: '5%'}}>
            <IconButton onClick={() => this.getList()} style={{margin: 0, color:'#2a4a33'}}>
              {<Icon value={'fa fa-search'} size={15} color={this.state.regexToggle ? 'green' : 'grey'}/>}
            </IconButton>
            <Button onClick={() => this.startTest()} style={{margin: 20, color:'#427568'}}>
              Test Now
            </Button>
            <Button onClick={() => this.clearText()} style={{margin: 20, color:'#822671'}}>
              Clear
            </Button>
          </form>
        </Paper>
        <Paper className={classes.root} elevation={0}>
          <CustomResult result={this.state.textInfo.result} regex={this.state.regexToggle ? this.state.textInfo.regex : '.*'}/>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(CustomAdvancedInput)
