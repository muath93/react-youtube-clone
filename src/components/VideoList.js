import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, i) => (
    <VideoItem key={i} video={video} onVideoSelect={onVideoSelect} />
  ));
  return (
    <Grid container spacing={5}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
