import initial from './initial.js';

// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `map`.
export default function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null ? void 0 : [];
  if (n == null || guard) return array[0];
  return initial(array, array.length - n);
}
