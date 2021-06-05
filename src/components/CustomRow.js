import React, { Component } from 'react';

import { CustomCard, CustomDetailedCard, CustomGraphCard } from './CardType';

import RowInfo from '../data/RootRowInfo';


class CustomRow extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{
        justifyContent: "center",
        alignItems: "center"}}>
        {this.props.rowInfo.map(row => (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            {row.map(element =>
              {
                if(element.type === 0) // 0: small card
                  return <CustomCard element={element}></CustomCard>
                if(element.type === 1 || element.type === 2 || element.type === 4 || element.type === 5 || element.type === 6) // 1: public table 2: private table
                  return <CustomDetailedCard element={element}></CustomDetailedCard>
                if(element.type === 3) // 3: graph card
                  return <CustomGraphCard element={element}></CustomGraphCard>
              }
            )}
          </div>
        ))}
      </div>
    );
  }
}

//<Card key={element.id} element={element}/>

export default CustomRow
