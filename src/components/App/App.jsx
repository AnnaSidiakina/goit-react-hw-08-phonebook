import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import Loader from 'components/Loader/Loader';
import Appbar from 'components/AppBar/AppBar';
import Container from '@mui/material/Container';
import PrivateRoute from 'components/PrivateRoute';
import { useSelector } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/auth/authApi';

const PageNotFound = lazy(() => import('Pages/PageNotFound'));
const ContactsPage = lazy(() => import('Pages/ContactsPage'));
const HomePage = lazy(() => import('Pages/HomePage'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const SignupPage = lazy(() => import('Pages/SignupPage'));

const App = () => {
  const token = useSelector(state => state.user.token);
  const { isFetching } = useGetCurrentUserQuery(undefined, { skip: !token });

  return !isFetching ? (
    <Container
      component="div"
      maxWidth="md"
      sx={{ py: 4, px: 0, textAlign: 'center' }}
    >
      <Appbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/signup" element={<SignupPage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer delay={3000} position={'top-left'} />
    </Container>
  ) : (
    <Container
      component="div"
      maxWidth="md"
      sx={{ py: 4, px: 0, textAlign: 'center' }}
    >
      <Loader />
    </Container>
  );
};

export default App;
