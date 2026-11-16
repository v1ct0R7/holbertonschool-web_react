import getImmutableObject from "./0-fromjs.js";

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const result = getImmutableObject(object);

console.log(result);
console.log(result.get("fear"));
