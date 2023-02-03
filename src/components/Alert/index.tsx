import MuiAlert from '@mui/material/Alert';
import MuiStack from '@mui/material/Stack';

const Alert = ({ text = '' }) => (
  <MuiStack sx={{ width: '200px', margin: '64px auto' }} spacing={2}>
    <MuiAlert severity="error">{text}</MuiAlert>
  </MuiStack>
);

export default Alert
