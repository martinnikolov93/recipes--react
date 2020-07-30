import React from 'react';

import Router from './Router';
import AuthController from './AuthController'

import './App.module.css';

function App() {
  return (
    <div>
      <AuthController>
        <Router />
      </AuthController>
    </div>
  );
}

export default App;
