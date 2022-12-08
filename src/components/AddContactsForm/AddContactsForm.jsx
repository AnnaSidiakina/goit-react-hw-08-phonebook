import React from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { toast } from 'react-toast';
import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading, isSuccess }] = useAddContactMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formName = e.currentTarget.elements.name.value;
    const formPhone = e.currentTarget.elements.number.value;
    const contactName = data.map(contact => contact.name.toLowerCase());

    if (contactName.includes(formName.toLowerCase())) {
      return toast.error(`${formName} is already in your list`);
    }
    addContact({
      name: formName,
      number: formPhone,
    });
  };

  // use useEffect so that the success notification shows up only when the contact is added
  useEffect(() => {
    if (isSuccess) {
      toast.success('The contact has been added to your list');
      reset();
    }
  }, [isSuccess]);

  return (
    <Box component="form" onSubmit={handleSubmit} width="100%">
      <Box
        sx={{
          px: 4,
          mt: 2,
          mb: 8,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box>
              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="outlined"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <TextField
                fullWidth
                id="standard-basic"
                label="Phone Number"
                variant="outlined"
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Fab
              color="primary"
              aria-label="add"
              type="submit"
              disabled={isLoading}
              variant="contained"
              size="medium"
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
      {/* </form> */}
    </Box>
  );
};
export default ContactsForm;
