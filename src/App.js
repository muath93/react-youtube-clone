import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handelSubmit('javascript');
  }

  handelSubmit = async searchTerm => {
    const respone = await youtube(searchTerm);
    this.setState({ videos: respone.items, selectedVideo: respone.items[0] });
    // console.log(this.state.selectedVideo);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const { selectedVideo, videos } = this.state;
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
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VEDIO LIST */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
