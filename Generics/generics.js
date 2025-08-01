"use strict";
let names = ["Max", "Anna"];
let store = {};
store.name = "Max";
let genericStore = {};
genericStore.name = "Max";
genericStore.isInstuctor = true;
function merge(a, b) {
    return [a, b];
}
const ids = merge(2, 5);
function mergeMultipleGenerics(a, b) {
    return [a, b];
}
const multiType = mergeMultipleGenerics(2, "hi");
// generic constraints
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ userName: "Max" }, { age: 30 });
console.log(merged);
