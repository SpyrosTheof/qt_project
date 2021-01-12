import React from 'react';
import LoginPage from './pages/login_page/login_page';
import DashboardPageLayout from './pages/dashboard_page/dashboard_page_layout';
import Aux from './hoc/auxiliary';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const { auth } = props;

  const routes = !auth ? (
    <Aux>
      <Route exact path='/' component={LoginPage} />
    </Aux>
  ) : (
    <Aux>
      <Route path='/' component={DashboardPageLayout} />
    </Aux>
  );

  return <div className='App'>{routes}</div>;
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

export default connect(mapStateToProps)(App);
