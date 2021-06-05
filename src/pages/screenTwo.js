import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom'

import AppBar from '../components/CustomAppBar';
import Row from '../components/CustomRow';
import RowInfo from '../data/PageTwoRowInfo';

// prop
//

class screenTwo extends Component {

  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/screenTwo' />
    }
  }

  render(){
    return(
      <div>
        <AppBar drawerWidth={240} title="Instant Test"/>
        <Row rowInfo={RowInfo}/>
      </div>
    );
  }
}

export default screenTwo
