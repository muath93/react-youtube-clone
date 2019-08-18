import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: '1rem', width: '60%' }}
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
