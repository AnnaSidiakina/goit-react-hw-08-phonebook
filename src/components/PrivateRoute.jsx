import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/users/login" replace />;
};

export default PrivateRoute;
