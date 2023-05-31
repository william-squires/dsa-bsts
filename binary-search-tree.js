"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(sought) {
    if (this.val === sought) {
      return this;
    } else if (this.left && sought < this.val) {
      return this.left.findRecursively(sought);
    } else if (this.right && sought > this.val) {
      return this.right.findRecursively(sought);
    } else {
      return undefined;
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);

    if (val < this.val){
      if (this.left) {
        return this.left.insertRecursively(val);
      } else {
        this.left = newNode;
        return this;
      }
    }
    if (val > this.val) {
      if (this.right) {
        return this.right.insertRecursively(val);
      } else {
        this.right = newNode;
        return this;
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    const arr = []

    function _traverse(node) {
      if (!node) return
      arr.push(node.val);
      _traverse(node.left);
      _traverse(node.right);
    }

    _traverse(this)
    return arr;

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    const arr = [];

    function _traverse(node) {
      if (!node) return;
      _traverse(node.left);
      arr.push(node.val);
      _traverse(node.right);
    }

    _traverse(this);
    return arr;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let curr = this.root;
    if (!curr) {
      this.root = newNode;
      return this
    }
    while(true) {
      if (val < curr.val)
      {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = newNode;
          return this;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = newNode;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (this.root) {
      return this.root.insertRecursively(val);
    } else {
      this.root = new Node(val);
    }
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let found;
    let curr = this.root;

    while(!found) {
      if (curr.val === val) {
        found = curr
      } else if (curr.left && val < curr.val) {
        curr = curr.left;
      } else if (curr.right && val > curr.val) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return found;
  }


  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root) return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    return (this.root) ? this.root.dfsPreOrder() : [];
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    return (this.root) ? this.root.dfsInOrder() : [];
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
