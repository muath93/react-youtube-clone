import React from 'react';

import { Grid } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
            </Grid>
            <Grid item xs={8}>
              {/* Videio DETAILS */}
            </Grid>
            <Grid item xs={4}>
              {/* VEDIO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
