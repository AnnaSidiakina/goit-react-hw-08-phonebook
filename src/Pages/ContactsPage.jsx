import ContactsForm from '../components/AddContactsForm/AddContactsForm';
// import { useGetContactsQuery } from 'redux/contacts/contactsApi';
// import { useState } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';

export const ContactsPage = () => {
  // const [filter, setFilter] = useState('');

  // const { data, isLoading } = useGetContactsQuery();

  // const filteredContacts = data?.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <ContactsForm />
      <ContactsList />
    </>
  );
};
