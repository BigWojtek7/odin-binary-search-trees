import Node from "./node-class.js";

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array){
    const sortedArr = [...new Set(array)].sort((a,b) =>  a - b);
    
  }
}

export default Tree
