import { useSelector } from 'react-redux';
import ContactsListItem from 'components/ContactListItem/ContactListItem';
import { ContactUl, EmptyContactText } from './ContactList.styled';

const getAvailableContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getAvailableContacts(items, filter);

  return (
    <ContactUl>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <EmptyContactText>No contacts</EmptyContactText>
      )}
    </ContactUl>
  );
};

export default ContactList;
