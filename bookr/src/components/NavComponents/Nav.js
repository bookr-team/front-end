import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bookrLogo from '../../img/bookr-logotype-altbg.svg';

function Nav(props) {
  return (
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start">
      <Grid>
        <img src={bookrLogo} alt="Bookr Home" style={{ height: '60px' }}/>
      </Grid>
      <Grid item xs={8}>
        <nav>
          <div>
            <NavLink exact to="/loggedin">Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </nav>
      </Grid>
      <Grid>
        <Button 
          name="logout" 
          color="primary" 
          style={{ fontFamily: 'aleo' }}
          onClick={props.handleLogout}
        >
          Log Out
        </Button>
      </Grid>
    </Grid>
  );
}

export default Nav;