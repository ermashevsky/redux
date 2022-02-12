import { nanoid } from 'nanoid';
import {
  add,
  remove,
  update,
} from '../actions/types';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 2500 },
  { id: nanoid(), name: 'Замена дисплея', price: 3000 },
];

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case add: {
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case remove: {
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    }
    case update: {
      const { id, name, price } = action.payload;
      return state.map(item => {
        if (item.id === id) {
          return { ...item, name, price: Number(price) };
        }
        return item;
      });
    }
    default:
      return state;
  }
}
