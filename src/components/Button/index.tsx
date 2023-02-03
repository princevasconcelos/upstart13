import MuiButton from '@mui/material/Button';

interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean
  onClick?: () => null
}

const Button = ({ children, disabled, ...rest }: ButtonProps) => {
  return <MuiButton variant='contained' disabled={disabled} color='info' size='large' type="submit" {...rest}>{children}</MuiButton>;
};

export default Button;
