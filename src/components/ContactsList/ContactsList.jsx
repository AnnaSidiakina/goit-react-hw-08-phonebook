import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filter from 'components/Filter/Filter';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

const ContactsList = () => {
  const { data, isLoading, refetch, isError } = useGetContactsQuery();
  // const contacts = useSelector(state => state.items);
  const [filter, setFilter] = useState('');
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(data);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Filter filter={filter} onChange={setFilter} />
      {isLoading && <Loader />}

      {data && (
        <TableContainer maxWidth="500" component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Phone number</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredContacts.map(contact => (
                <ContactsListItem
                  key={contact.id}
                  {...contact}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isError && <p>Ooops, something went wrong, please, try again.</p>}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};

export default ContactsList;

//  {
//    data && (
//      <div className={styles.container}>
//        <h2 className={styles.title}>Contacts</h2>

//        <ul className={styles.list}>
//          {filteredContacts.map(contact => (
//            <ContactsListItem key={contact.id} {...contact} />
//          ))}
//        </ul>
//      </div>
//    );
//  }
