import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
import Main from './Components/main/Main';
import RightMenu from './Components/right-panel/RightMenu';
import SideNav from './Components/side-nav/SideNav';
import {createContext} from 'react';


/**
 * Design inspiration: @link https://dribbble.com/shots/16856425-SazheSound-Music-Player
 * @returns
 */

export const LoginContext = createContext({status:false, auth_token:'', refresh_token:''})

function App() {

  let loginData = { status: false, auth_token: '', refresh_token: '' };
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
      <LoginContext.Provider value={loginData}>
      {<RightMenu/>}
    </LoginContext.Provider>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
