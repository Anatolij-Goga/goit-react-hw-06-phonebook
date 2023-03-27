import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactButton,
} from './ContactListItem.styled';

const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem id={id}>
      <ContactName>
        {name} - {number}
      </ContactName>
      <ContactButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
