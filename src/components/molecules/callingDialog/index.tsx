import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import Spinner from '../../atoms/spinner';
import { TInitialState } from '../../../redux/createStore';

const Dialog = withStyles(() => ({
  paper: {
    background: 'none',
    boxShadow: 'none',
  },
}))(MuiDialog);

const CallingDialog = () => {
  const { isCalling } = useSelector((state: TInitialState) => state.call);
  return (
    <Dialog open={isCalling} scroll="body">
      <Spinner />
    </Dialog>
  );
};

export default CallingDialog;
