import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeServiceField, remove, clearServiceField } from '../../actions/creators';

const List = () => {
  const items = useSelector(({ List }) => List);
  const { filterName } = useSelector(({ Filter }) => Filter);
  const dispatch = useDispatch();

  const filteredItems = items.filter(({ name, price }) => {
    const currentName = name.toLowerCase();
    const currentPrice = String(price).toLowerCase();
    const currentFilterName = filterName.toLowerCase();

    return currentName.includes(currentFilterName) || currentPrice.includes(currentFilterName);
  });

  const handleRemove = id => {
    dispatch(remove(id));
    dispatch(clearServiceField());
  };

  const handleChange = (name, value, id) => {
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', value));
    dispatch(changeServiceField('id', id));
  };

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
          <button onClick={() => handleChange(item.name, item.price, item.id)}>change</button>
          <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
