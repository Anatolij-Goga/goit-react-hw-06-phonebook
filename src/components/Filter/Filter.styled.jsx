import styled from '@emotion/styled';

const FilterContainer = styled.div`
  background-image: linear-gradient(to right, #553c9a 45%, #ee4b2b);
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

const FilterLabel = styled.label`
  color: white;
`;

const FilterInput = styled.input`
  margin-left: 20px;
`;

export { FilterContainer, FilterLabel, FilterInput };
