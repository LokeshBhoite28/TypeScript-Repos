let names: Array<string> = ["Max", "Anna"];

type DataStore = {
  [prop: string]: string | number;
};

let store: DataStore = {};
store.name = "Max";
// store.isInstuctor = true; // not allowed => cause prop is only string or number type

type GenericDataStore<T> = {
  [prop: string]: T;
};

let genericStore: GenericDataStore<string | boolean> = {};
genericStore.name = "Max";
genericStore.isInstuctor = true;

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge<number>(2, 5);

function mergeMultipleGenerics<T, U>(a: T, b: U) {
  return [a, b];
}

const multiType = mergeMultipleGenerics<number, string>(2, "hi");

// generic constraints
function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Max" }, { age: 30 });
console.log(merged);

class User<T> {
  /**
   *
   */
  constructor(private name: T) {}
}
