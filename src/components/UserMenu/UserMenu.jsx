import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from 'redux/auth/authApi';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import { useEffect } from 'react';

export const UserMenu = () => {
  const { token, name } = useSelector(state => state.user);

  const [logout] = useLogoutUserMutation();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector(state => state.user);

  const handleLogout = () => {
    logout(token);

    navigate('/');
    console.log(isLoggedIn);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button component="p" sx={{ my: 2, color: 'white' }}>
        {name}
      </Button>

      <Button
        component="button"
        onClick={handleLogout}
        sx={{ my: 2, color: 'white' }}
      >
        Log out
      </Button>
    </Box>
  );
};

// export default userMenu;
