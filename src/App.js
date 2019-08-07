import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';

class App extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              {/* Videio DETAILS */}
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              {/* VEDIO LIST */}
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
