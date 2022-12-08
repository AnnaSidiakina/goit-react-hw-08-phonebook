import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import styles from './App.module.css';
// import Form from '../AddContactsForm/AddContactsForm';
// import ContactsList from '../ContactsList/ContactsList';
// import { useState } from 'react';
import { ToastContainer } from 'react-toast';
// import { useGetContactsQuery } from 'redux/contacts/contactsApi';
// import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { Appbar } from 'components/AppBar/AppBar';
import { HomePage } from '../../Pages/HomePage';
import { ContactsPage } from '../../Pages/ContactsPage';
import { LoginPage } from '../../Pages/LoginPage';
import { SignupPage } from '../../Pages/SignupPage';
import Container from '@mui/material/Container';
import PrivateRoute from 'components/PrivateRoute';
import { useSelector } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/auth/authApi';
// import { useGetContactsQuery } from 'redux/contacts/contactsApi';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const App = () => {
  const token = useSelector(state => state.user.token);
  const { isFetching } = useGetCurrentUserQuery(token);

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
        </Routes>
      </Suspense>
      <ToastContainer delay={3000} position={'top-left'} />
    </Container>
  ) : (
    <Loader />
  );
};

export default App;

// return (
//   <Container>
//     <AppBar />

//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/register" component={RegisterPage} />
//       <Route path="/login" component={LoginPage} />
//       <Route path="/contacts" component={ContactsPage} />
//     </Switch>
//   </Container>
// );

// return (
//   <>
//     <div className={styles.container}>
//       <h1 className={styles.title}>Phonebook</h1>
//       <Form contacts={filteredContacts} />
//       <Filter filter={filter} onChange={setFilter} />
//       {isLoading && <Loader size={'40'} />}
//       {filteredContacts && <ContactsList contacts={filteredContacts} />}
//       <ToastContainer delay={3000} position={'top-left'} />
//     </div>
//   </>
// );

//  return (
//    <div>
//      <AppBar />
//      {isLoading ? (
//        <Loader />
//      ) : (
//        <Suspense fallback={<Loader />}>
//          <Routes>
//            <Route path="/" element={<HomePage />} />
//            <Route path="/users/signup" element={<SignupPage />} />
//            <Route path="/users/login" element={<LoginPage />} />
//            <Route path="contacts" element={<PrivateRoute />}>
//              <Route
//                path="/users/contacts"
//                element={<ContactsPage contacts={contacts} />}
//              />
//            </Route>
//          </Routes>
//        </Suspense>
//      )}
//    </div>
//  );
