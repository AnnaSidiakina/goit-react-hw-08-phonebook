import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toast';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
// import { useSelector } from 'react-redux';

export const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  // use useEffect so that the success notification shows up only when the contact is deleted
  useEffect(() => {
    if (isSuccess) {
      toast.success('The contact has been successfully deleted');
    }
  }, [isSuccess]);

  const handleClick = () => {
    deleteContact(id);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{number}</TableCell>
      <TableCell align="right">
        {!isDeleting && (
          <DeleteIcon
            sx={{
              color: '#d32f2f',
              ml: 4,
              cursor: 'pointer',
            }}
            disabled={isDeleting}
            onClick={handleClick}
          />
        )}
        {isDeleting && <Loader size={'15'} color="#d32f2f" />}
      </TableCell>
    </TableRow>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

/* <Button
        variant="contained"
        color="error"
        className={styles.button}
        disabled={isDeleting}
        onClick={handleClick}
      > */

/* <li className={styles.item}>
  <span className={styles.text}>{name}</span>
  <span className={styles.number}>{number}</span>
  {!isDeleting && (
    <DeleteIcon
      sx={{
        color: '#d32f2f',
        ml: 4,
        cursor: 'pointer',
      }}
      disabled={isDeleting}
      onClick={handleClick}
    />
  )}

  {isDeleting && <Loader size={'15'} color="#d32f2f" />}
</li>; */
