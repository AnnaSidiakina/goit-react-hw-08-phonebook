import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <Box sx={{ padding: 8 }}>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Welcome to PhoneBooke service!
      </Typography>
    </Box>
  );
};

export default HomePage;
