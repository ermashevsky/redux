import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeServiceField,
  add,
  update,
  clearServiceField
} from '../../actions/creators';

const Add = () => {
  const item = useSelector(({ serviceAdd }) => serviceAdd);
  const serviceList = useSelector(({ serviceList }) => serviceList);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item.name === '' || item.price === '') {
      return;
    }
    const isServiceExist = serviceList.some(service => item.id === service.id);

    if (isServiceExist) {
      dispatch(update(item.id, item.name, item.price));
    } else {
      dispatch(add(item.name, item.price));
    }

    dispatch(clearServiceField());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      {(item.name !== '' || item.price) && (<button onClick={() => dispatch(clearServiceField())}>Cancel</button>)}
    </form>);
}

export default Add;
