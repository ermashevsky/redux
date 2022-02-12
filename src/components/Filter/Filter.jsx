import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../actions/creators';

const Filter = () => {
  const { filterName } = useSelector(({ Filter }) => serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filter(value));
  }

  return (
    <form>
      <input onChange={handleChange} value={filterName} />
      filter
    </form>
  );
};

export default Filter;
