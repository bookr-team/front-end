import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bookrLogo from '../../img/bookr-logotype.svg';

function Nav(props) {
  // props.location.pathname === '/loggedin' && 
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{
        backgroundColor: "white", //"#cbebe6",
        padding: "20px 20px"
      }}
    >
      {/* style={{ backgroundColor: "blue" }} */}
      <Grid item xs={12} sm={4}>
        <img src={bookrLogo} alt="Bookr Home" style={{ height: '60px' }} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        // style={{ maxWidth: "40%" }}
        >
          <Grid item xs={4}>
            <Typography variant="h6">
              <NavLink exact to="/loggedin">
                Home
              </NavLink>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <NavLink to="/settings">
                Settings
              </NavLink>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              name="logout"
              color="primary"
              style={{ fontFamily: 'aleo', fontSize: '1.2rem' }}
              onClick={props.handleLogout}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default withRouter(Nav);