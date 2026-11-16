export default function accessImmutableObject(object, array) {
  let current = object;

  for (const key of array) {
    if (current === undefined || current === null) {
      return undefined;
    }

    current = current[key];
  }

  return current;
}
