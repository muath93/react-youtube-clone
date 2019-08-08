import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  handelChange = e => this.setState({ searchTerm: e.target.value });

  handelSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: '1.5rem' }}>
        <form onSubmit={this.handelSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handelChange}
            value={this.state.searchTerm}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
