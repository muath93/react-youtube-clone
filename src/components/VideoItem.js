import React from 'react';

import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  const breakPoint = useMediaQuery('(min-width:600px)');
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          padding: '0.5rem',
          marginTop: '0.5rem',
          display: 'flex',
          flexDirection: breakPoint ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            marginRight: breakPoint ? '1rem' : '',
            width: '60%'
          }}
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <Typography
          style={{
            marginTop: breakPoint ? '' : '0.5rem'
          }}
          variant="subtitle1"
        >
          {video.snippet.title}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
