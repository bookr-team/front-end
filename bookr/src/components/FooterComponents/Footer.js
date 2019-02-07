import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bookrLogo from '../../img/bookr-logotype.svg';

function Footer(props) {
  return (
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{ 
        backgroundColor: "#c8c6cc", //"#cbebe6",
        padding: "20px 180px 50px 180px"
      }}
    >
    {/* style={{ backgroundColor: "blue" }} */}
      <Grid >
        <img src={bookrLogo} alt="Bookr Home" style={{ height: '60px' }}/>
      </Grid>
      <Grid 
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ maxWidth: "40%"}}
      >
          <Typography
            variant="h6"
          >
            <NavLink 
              exact to="/loggedin"
            >
              Home
            </NavLink>
          </Typography>
          <Typography
            variant="h6"
          >
            <NavLink 
              to="/settings"
            >
              Settings
            </NavLink>
          </Typography>
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
  );
}

export default withRouter(Footer);