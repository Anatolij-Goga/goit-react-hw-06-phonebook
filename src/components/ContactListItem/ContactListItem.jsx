import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import {
  ContactItem,
  ContactName,
  ContactButton,
} from './ContactListItem.styled';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactDelete = id => dispatch(deleteContact(id));

  return (
    <ContactItem id={id}>
      <ContactName>
        {name} - {number}
      </ContactName>
      <ContactButton type="button" onClick={() => contactDelete(id)}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
