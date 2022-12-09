import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'redux/auth/authApi';
import { toast } from 'react-toast';
import { useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const LoginPage = () => {
  const [login, { isError }] = useLoginUserMutation();
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { isLoggedIn } = useSelector(state => state.user);

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const credentials = {
      name: data.get('name'),
      email: data.get('email').trim(),
      password: data.get('password'),
    };

    if (
      credentials.name === '' ||
      credentials.email === '' ||
      credentials.password === ''
    ) {
      toast.error('Please, fill all the fields!');
    }
    login(credentials);
  };
  // if (!email || !password) {
  //   return;
  // }
  // const credentials = { email, password };

  // navigate('/contacts');
  // reset();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
    if (isError) {
      toast.error('Wrong name or password');
    }
  });

  // function reset() {
  //   setEmail('');
  //   setPassword('');
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default LoginPage;
