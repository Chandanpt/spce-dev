// Loader.tsx
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Theme, styled } from '@mui/system'; // Change the import

// Use the styled utility instead of makeStyles
const LoaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
