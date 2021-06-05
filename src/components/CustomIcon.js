// Icon List can be found
// https://fontawesome.com/v4.7.0/icons/

import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CustomIcon(props) {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className={classes.root}>
      <Icon className={props.value} style={{ fontSize: props.size, color: props.color}} />
    </div>
  );
}
