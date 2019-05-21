import React from 'react';
import { Link } from 'react-router-dom';

// import App from './App';

function Landing() {
  return (
    <>
      <Link to="/login" className="login-notice">LOG IN!!</Link>
    </>
  );
}

export default Landing;