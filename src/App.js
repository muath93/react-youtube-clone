import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  };

  handelSubmit = async searchTerm => {
    const respone = await youtube(searchTerm);
    this.setState({ video: respone.items, selectedVideo: respone.items[0] });
    console.log(this.state.selectedVideo);
  };
  render() {
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
              <SearchBar onFormSubmit={this.handelSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* Videio DETAILS */}
              <VideoDetails video={this.state.selectedVideo} />
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
