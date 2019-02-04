import React from 'react';

import Home from '../../components/HomeComponents/Home';

function HomeView(props) {
  return (
    <div className="HomeView">
      <Home 
      userName={props.userName}
      />
    </div>
  );
}

export default HomeView;