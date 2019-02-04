import React from 'react';

function Home(props) {
  return (
    <div className="Home">
      <h1>Welcome to BOOKR, {props.userName}</h1>
    </div>
  );
}

export default Home;