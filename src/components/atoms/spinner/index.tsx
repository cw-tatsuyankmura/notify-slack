import React, { FC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiCircularProgress from '@material-ui/core/CircularProgress';

const CircularProgress = withStyles(() => ({
  root: {
    margin: '20px auto',
    display: 'block',
    zIndex: 10,
  },
}))(MuiCircularProgress);

export const Spinner: FC = () => <CircularProgress />;

export default Spinner;
