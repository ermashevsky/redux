import { change_service_field, clear_service_field } from '../actions/types';

const initialState = {
  name: '',
  price: '',
  id: '',
};

export default function addReducer(state = initialState, action) {
  switch (action.type) {
    case change_service_field: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case clear_service_field: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
