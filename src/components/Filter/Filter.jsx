import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };
  return (
    <FilterContainer>
      <FilterLabel>
        Filter
        <FilterInput type="name" value={filter} onChange={filterChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
