import {
  add,
  remove,
  change_service_field,
  update,
  clear_service_field,
  filter
} from './types';

export function add(name, price) {
  return { type: add, payload: { name, price } };
}

export function remove(id) {
  return { type: remove, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: change_service_field, payload: { name, value } };
}

export function update(id, name, price) {
  return { type: update, payload: { id, name, price } };
}

export function clearServiceField() {
  return { type: clear_service_field };
}

export function filter(filterName) {
  return { type: filter, payload: { filterName }};
}
