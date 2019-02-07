import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

function ProgressBar() {
  const stylesLinearProgress = {
    root: {
      flexGrow: 1,
    },
  };

  const LinearIndeterminate = (props) => {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
    );
  }

  const Component = withStyles(stylesLinearProgress)(LinearIndeterminate);
  
  return <Component />
}

export default ProgressBar;