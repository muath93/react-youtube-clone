import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
  // state = {
  //   searchTerm: ''
  // };

  const [searchTerm, setSearchTerm] = useState('');

  const handelChange = e => setSearchTerm(e.target.value);

  const handelSubmit = e => {
    e.preventDefault();

    onFormSubmit(searchTerm);
  };

  return (
    <Paper elevation={6} style={{ padding: '1.5rem' }}>
      <form onSubmit={handelSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={handelChange}
          value={searchTerm}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
