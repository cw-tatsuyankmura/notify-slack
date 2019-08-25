import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './thema';
import createStore from './redux/createStore';
import { Index } from './components/pages/index';
import { Members } from './components/pages/members';
import { Complete } from './components/pages/complete';
import { Index as AdminIndex } from './components/pages/admin';
import { Create } from './components/pages/admin/create';
import { Edit } from './components/pages/admin/edit';
import { Header } from './components/organisms/header';
import CallingDialog from './components/molecules/callingDialog';

const history = createBrowserHistory();
const store = createStore(history);

const App: FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <div style={{ margin: '40px 20px' }}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/complete" component={Complete} />
              <Route exact path="/admin" component={AdminIndex} />
              <Route exact path="/admin/create" component={Create} />
              <Route exact path="/admin/:id/edit" component={Edit} />
              <Redirect to="/" />
            </Switch>
          </div>
          <CallingDialog />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
