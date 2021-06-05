import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Chart } from "react-google-charts";


const useStyles = makeStyles({
  root: {

  },
});

export default function CustomGraph(props) {
  const classes = useStyles();

  return (
    <Chart className={classes.root}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[["Age", "Weight"], [1, 5.5], [2, 12], [3, 5.5], [4, 5.5], [5, 5.5], [6, 70.5], [7, 5.5], [8, 5.5], [9, 5.5], [10, 5.5], [11, 5.5]]}
      width="100%"
      height="100%"
      options={{
        legend: { position: 'none' },
        enableInteractivity: false,
        animation: {
          startup: true,
          easing: 'linear',
          duration: 500,
        },
        colors: ['white'],
        lineWidth: 3,
        backgroundColor: props.backGroundColor,
        baselineColor: 'white',
        gridlineColor: 'white',
        pointSize: 7,
        hAxis: {
            textStyle:{color: 'white'}
        },
        vAxis: {
            textStyle:{color: 'white'}
        }
      }}
      legendToggle
    />
  );
}
