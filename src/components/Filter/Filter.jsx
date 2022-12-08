import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Filter = ({ filter, onChange }) => {
  return (
    <Box width="80%" sx={{ mb: 4, mx: 'auto' }}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Search"
        variant="standard"
        value={filter}
        type="text"
        onChange={e => onChange(e.currentTarget.value)}
      />
      {/* <label className={styles.label}>
        Filter
        <input
          value={filter}
          className={styles.input}
          type="text"
          onChange={e => onChange(e.currentTarget.value)}
        />
      </label> */}
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
