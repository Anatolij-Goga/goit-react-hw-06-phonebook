import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { AppContainer, ContactsTitle, PhonebookTitle } from './App.styled';

export default function App() {
  return (
    <AppContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
}
