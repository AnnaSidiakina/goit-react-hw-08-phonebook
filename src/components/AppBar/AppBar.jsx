import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const Appbar = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  return (
    <Container component="header">
      <Box sx={{ display: 'flex' }}>
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#1976d2',
            px: 4,
          }}
        >
          <Button component={NavLink} to="/" sx={{ my: 2, color: 'white' }}>
            Home
          </Button>

          {!isLoggedIn && (
            <Box sx={{ display: 'flex' }}>
              <Button
                component={NavLink}
                to="/users/signup"
                sx={{ my: 2, color: 'white' }}
              >
                Sign up
              </Button>

              <Button
                component={NavLink}
                to="/users/login"
                sx={{ my: 2, color: 'white' }}
              >
                Log in
              </Button>
            </Box>
          )}
          {isLoggedIn && <UserMenu />}
        </Box>
      </Box>
    </Container>
  );
};
