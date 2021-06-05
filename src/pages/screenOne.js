import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AppBar from '../components/CustomAppBar';
import Row from '../components/CustomRow';
import RowInfo from '../data/PageOneRowInfo';


// prop
//


class screenOne extends Component {

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
        <AppBar drawerWidth={240} title="Advanced Test"/>
        <Row rowInfo={RowInfo}/>
      </div>
    );
  }
}

export default screenOne
