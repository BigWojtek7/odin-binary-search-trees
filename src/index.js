import Tree from "./tree-class.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const sortedArr = [...new Set(arr)].sort((a,b) =>  a - b);
console.log(sortedArr)
