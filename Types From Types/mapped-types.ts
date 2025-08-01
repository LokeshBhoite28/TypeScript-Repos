type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results = {
  add: number;
  subtract: number;
};

type GenericResults<T> = {
  [Key in keyof T]: number
};

let mathOperations: Operations = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract: function (a: number, b: number): number {
    return a - b;
  },
};

let mathResults: Results = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(2, 1),
};

let mathResults1: GenericResults<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(2, 1),
};
