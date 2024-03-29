import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Main from './Components/main/Main';
import RightMenu from './Components/right-panel/RightMenu';
import SideNav from './Components/side-nav/SideNav';


/**
 * Design inspiration: @link https://dribbble.com/shots/16856425-SazheSound-Music-Player
 * @returns
 */
function App() {
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
      <RightMenu/>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
