import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';

const App = () => {
  // state = {
  //   videos: [],
  //   selectedVideo: null
  // };

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // componentDidMount() {
  //   this.handelSubmit('javascript');
  // }

  useEffect(() => {
    handelSubmit('javascript');
  }, []);

  const handelSubmit = async searchTerm => {
    const respone = await youtube(searchTerm);
    setVideos(respone.items);
    setSelectedVideo(respone.items[0]);
    // this.setState({ videos: respone.items, selectedVideo: respone.items[0] });
    // console.log(this.state.selectedVideo);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
    this.setState({ selectedVideo: video });
  };
  // const { selectedVideo, videos } = this.state;
  return (
    <Grid
      container
      justify="center"
      spacing={2}
      style={{ margin: 'auto', width: '99%' }}
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* SEARCH BAR */}
            <SearchBar onFormSubmit={handelSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* Videio DETAILS */}
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            {/* VEDIO LIST */}
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
