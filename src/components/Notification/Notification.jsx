import PropTypes from 'prop-types';
import { NotificationContainer } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationContainer>{message}</NotificationContainer>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
