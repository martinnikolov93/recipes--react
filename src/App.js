import React from 'react';

import Router from './Router';
import AuthController from './AuthController'

function App() {
  return (
      <AuthController>
        <Router />
      </AuthController>
  );
}

export default App;
