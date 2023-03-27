import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactListItem/ContactListItem';
import { ContactUl } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactUl>
    {contacts.map(({ id, name, number }) => (
      <ContactsListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ContactUl>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
