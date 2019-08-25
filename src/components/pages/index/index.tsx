import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { call } from '../../../redux/call/actions';

export const Index: FC = () => {
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          to="/members"
          component={Link}
        >
          アポイントのある方
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={() => dispatch(call.start('<!here>'))}
        >
          アポイントがない方
        </Button>
      </Grid>
    </Grid>
  );
};
