import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Header: FC = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        <Link
          to="/"
          style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}
        >
          WELCOME TO COMPANY
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);
