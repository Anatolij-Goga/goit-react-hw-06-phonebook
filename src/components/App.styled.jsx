import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  fontsize: 18;
`;

const PhonebookTitle = styled.h1`
  color: white;
`;

const ContactsTitle = styled.h2`
  margin-top: 70px;
  color: white;
`;

const AllContactsTitle = styled.h3`
  margin-bottom: 10px;
  color: white;
`;

export { AppContainer, ContactsTitle, AllContactsTitle, PhonebookTitle };
