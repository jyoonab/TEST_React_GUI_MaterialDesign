import React from 'react';
import Typography from '@material-ui/core/Typography';

// type 1
export default function CustomText(props){
  return(
    <div style={{marginLeft: 20}}>
      <Typography variant="h5" component="h2" align="left" style={{marginBottom: 5, color: props.color}}>
        {props.text}
      </Typography>
      <Typography color="textSecondary" gutterBottom align="left" style={{color: props.color}}>
        {props.subText}
      </Typography>
    </div>
  );
}
