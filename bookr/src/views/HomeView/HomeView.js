import React from 'react';
import { Route} from 'react-router-dom';

import Home from '../../components/HomeComponents/Home';
import LoginView from '../LoginView/LoginView';

function HomeView(props) {

  return (
    <div className="HomeView">
      <Route exact path="/loggedIn" component={HomeView} />
      <Home 
      userName={props.userName}
      />
    </div>
  );
}

export default HomeView;