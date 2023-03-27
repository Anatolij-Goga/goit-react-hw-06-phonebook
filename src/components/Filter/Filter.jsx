import React from 'react';
import Proptypes from 'prop-types';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <FilterLabel>
      Filter
      <FilterInput type="name" value={value} onChange={onChange} />
    </FilterLabel>
  </FilterContainer>
);

Filter.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};

export default Filter;
