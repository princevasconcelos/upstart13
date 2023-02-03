import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 80px 16px 24px;
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, 250px);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;
