import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from './App';

function Landing() {
  return (
    <>
      <Link to="/login">Log In</Link>
    </>
  );
}

export default Landing;