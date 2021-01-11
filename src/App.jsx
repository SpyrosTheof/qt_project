import React from 'react';
import LoginPage from './pages/login_page/login_page';
import DashboardPageLayout from './pages/dashboard_page/dashboard_page_layout';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/dashboard' component={DashboardPageLayout} />
    </div>
  );
}

export default App;
