import { filter_service } from '../actions/types';

const initialState = {
  filterName: '',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case filter_service: {
      const { filterName } = action.payload;
      return { filterName };
    }
    default:
      return state;
  }
}
