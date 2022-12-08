import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import Filter from 'components/Filter/Filter';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const ContactsList = () => {
  const { data, isLoading, refetch, isError } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {isLoading && <Loader />}

      {data && (
        <>
          {data.length > 0 ? (
            <>
              <Filter filter={filter} onChange={setFilter} />
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
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Box sx={{ padding: 2 }}>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                component="p"
              >
                Your phone book is empty, please, start adding contacts.
              </Typography>
            </Box>
          )}
        </>
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
