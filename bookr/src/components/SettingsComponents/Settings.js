import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

import bookrImg from '../../img/bookr-logo.svg';

class Settings extends React.Component {

  render() {
      
      return (
        <Card raised style={{ width: "25%", margin: '20px', padding: '20px' }}>
          <Grid 
            container 
            direction="row" 
            justify="flex-end" 
          >
            <IconButton 
              onClick={() => {}}
              style={{ margin: "-20px -20px -20px 0"}}
            >
              <DeleteIcon fontSize="small"/>
            </IconButton>
            }
          </Grid>
          <Link 
            to={`/loggedin`}
            style={{ textDecoration: 'none' }}
          > 
          <CardActionArea>
            <Typography 
              variant="h4" 
              style={{ maxWidth: '400px' }}
            >
              {"Setting Name"}
            </Typography>
            <CardMedia
              className=""
              image={bookrImg}
              title="Nothing"
              style={{ margin: '15px 0'}}
            />
            <Typography variant="h6">{"Some Stuff Here"}</Typography>
            <Typography variant="subtitle1">{"Other Stuff Here"}</Typography>
            <Typography variant="body1">
              {"Research & development seed round graphical user interface influencer holy grail marketing creative startup social proof growth hacking. Startup social media hackathon stock termsheet influencer. Technology accelerator equity gen-z network effects. Focus iPad graphical user interface partner network startup. Business-to-consumer responsive web design marketing sales. Bootstrapping startup validation agile development assets infographic. User experience rockstar direct mailing niche market holy grail interaction design product management deployment conversion agile development analytics backing. Partnership pitch stealth virality hackathon facebook investor. Channels startup social media innovator user experience business-to-business non-disclosure agreement. Lean startup iPad gen-z facebook direct mailing metrics entrepreneur business-to-consumer holy grail research & development ecosystem handshake."}
            </Typography>
          </CardActionArea>
          </Link>
        </Card>
      );
    } 
}

export default withRouter(Settings);