import { Grid } from '@mui/material';
import React, { useEffect, useState} from 'react';
import './App.css';
import Main from './Components/main/Main';
import RightMenu from './Components/right-panel/RightMenu';
import SideNav from './Components/side-nav/SideNav';
import { createPopUp, requestRefreshToken } from './services/LoginService';


/**
 * Design inspiration: @link https://dribbble.com/shots/16856425-SazheSound-Music-Player
 * @returns
 */

function App() {
  const [authToken, setAuthToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const refTime = Number(localStorage.getItem('refresh_time'))
  useEffect(()=>{
    let access_token = localStorage.getItem('access_token')||'';
    let refresh_token = localStorage.getItem('refresh_token')||'';
    !access_token || null ? createPopUp() : setAuthToken(access_token);
    if (Date.now() > refTime) requestRefreshToken();
    setAuthToken(access_token);
    setRefreshToken(refresh_token);
  
  },[authToken])
  return (
    <div className="App">
      <Grid container spacing={4}>
      <Grid item sm={3}>
      <SideNav/>
      </Grid>
      <Grid item sm={6}>
      <Main/>
      </Grid>
      <Grid item sm={3}>
      <RightMenu token={{authToken}}/>
      </Grid>
      </Grid>
    </div>
  );

}

export default App;

