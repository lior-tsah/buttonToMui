import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({

  '&:disabled': {
    cursor: 'auto',
  },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0 10px',
  //   gap: '7px',
  //   minHeight: '25px',
  //   fontSize: '12px',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   padding: '0 21px',
  //   gap: '10px',
  //   minHeight: '34px',
  //   fontSize: '16px',
  // },
  '&.transparent': {
    backgroundColor: 'transparent',
    fontWeight: 700,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&::placeholder': {
      color: theme.palette.primary.main,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.action.disabled,
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled,
      },
    },
  },
  '&.tertiary': {
    backgroundColor: 'white',
    border: '2px solid black',
    fontWeight: 700,
    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    '&:disabled': {
      backgroundColor: 'white',
      border: `2px solid ${theme.palette.action.disabled}`,
      '&:hover': {
        backgroundColor: 'white',
        border: `2px solid ${theme.palette.action.disabled}`,
        color: theme.palette.action.disabled,
      },
    },
  },
  '&.danger': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
    fontWeight: 700,
    '&:disabled': {
      opacity: 0.4,
    },
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  '&.primary': {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      '&:hover': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
  },
  '&.secondary': {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.common.black}`,
    fontWeight: 700,
    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      border: `2px solid ${theme.palette.action.disabled}`,
      '&:hover': {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.action.disabled}`,
        color: theme.palette.action.disabled,
      },
    },
  },
  '&.link': {
    textDecoration: 'none !important',
  },
}));
export default StyledButton;