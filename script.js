class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

var root = null;


// takes root array w/ parameters, turns it into node tree
function sortedArrayToBST(arr, start, end) {
    if (start > end){
        return null;
    }

    let mid = parseInt((start + end) /2)
    let node = new Node(arr[mid])

    node.left = sortedArrayToBST(arr, start, mid-1)
    node.right = sortedArrayToBST(arr, mid+1, end)

    return node
}

function preOrder(node) {
    if (node == null){
        return
    }
    document.write(node.data + " ");
    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node) {
    if (node == null){
        return
    }
    inOrder(node.left)
    document.write(node.data + " ");
    inOrder(node.right)
}

function postOrder(node) {
    if (node == null){
        return
    }
    postOrder(node.left)
    postOrder(node.right)
    document.write(node.data + " ");
}

// insert function
// add number to the array, run the program again? Is this optimal? NO.
// Do not use original arr used to build the tree.
// Keep traversing tree until left or right of root is null (no children on leaf)
function insert(d, root = this.root) {
    if (root === null) {
      root = new Node(d);
      return root;
    }

    if (d < root.data) {
      root.left = this.insert(d, root.left);
    } else if (d > root.data) {
      root.right = this.insert(d, root.right);
    }

    return root;
  }

// delete function
// Account for 3 cases. When node to delete...
// Has children, 1 child, or no children
// If tree is empty, return.
// Traverse tree until node to delete is found. Once found, log "X found"
// enter 3 cases.
// if (root.left == true && root.right == true)
// if (root.left == true || root.right == true)
    // if left == true && right != true, left.value = root.value
// if (root.left && root.right == null)
// We might simply replace the value? To avoid needing to relink everything.
// The node to be replaced. Might traverse searching for the noe value
//  in btwn desired value and parent?

function deleteNode(root, d){
    if (root == null) {
        return root
    }

    if (d > root.d) {
        root.right.deleteNode(root.right, d)
    } else if (d < root.d) {
        root.left.deleteNode(root.left, d)
    } else {
        if (root.left == null){
            return root.right
        } else if (root.right == null) {
            return root.left
        }

        cur = root.right
        while (cur.left == true) {
            cur = cur.left
        }
        root.d = cur.d
        root.right = self.deleteNode(root.right, root.d)
        return root
    }
}

function deleteNode(value, root = this.root) {
    // Base case
    if (root === null) {
      return root;
    }

    // Traverse down the tree
    if (value < root.data) {
      root.left = this.deleteNode(value, root.left);
    } else if (value > root.data) {
      root.right = this.deleteNode(value, root.right);
    } 

    // Value matches -> delete node and update pointers
    else {
      // option 1: root(child) has only one child
      if (root.left === null) {
        // return the child's right so new parent can point to it
        return root.right;
      } else if (root.right === null) {
        // return child's left so new parent can point to it
        return root.left;
      }
      // option 2: Node has two children
      else {
        // Replace node with next smallest value
        const minData = function findNextSmallestRightData(root) {
          let min = root.data;
          let newRoot = root;

          // Search for a left node with no left children. 
          while (newRoot.left !== null) {
            min = root.left.data;
            newRoot = root.left;
          }

          return min;
        }

        root.data = minData(root.right);

        // Delete the copied node from minData()
        root.right = this.deleteNode(root.data, root.right)
      }
    }

    return root;
  }
// find function

// levelOrder func

// height func

// depth func

// isBalanced func

// rebalance func

// ----------- mergeSort(array) --------------

function mergeSort(array) {
if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  console.log(sortedLeft)
  console.log(sortedRight)

  return merge(sortedLeft, sortedRight)
}

function merge (left, right) {
  result = []
  leftIndex = 0
  rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex ++
    } else {
      result.push(right[rightIndex])
      rightIndex ++
    }
  }

  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

  return result
}

function removeDuplicates(arr){
    for (let i = 0; i < n; i++){
        if (arr[i] == arr[i+1]){
            console.log("duplicate " +(arr[i]) + " found at " + i + " and " + (i + 1))
            arr.splice(i, 1)
        }
    }
    return arr
}

// ------ buildTree() combines various functions to build BST ---------

function buildTree() {
    // Need to take array, order it (mergeSort(arr))
    //  removeDuplicates()
    // Need to redefine n = arr.length. This is the new length after rmving dupes
    // Then pass it through sortedArrayToBST(arr, 0, n-1)
    // This is the new root, and pass root prettyPrint()
    let finishedTree = removeDuplicates(mergeSort(arr))
    n = finishedTree.length
    root = sortedArrayToBST(finishedTree, 0, n-1)
    prettyPrint(root)
    root.d = finishedTree[Math.floor(n/2)]
    return root.d
}

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let n = arr.length

root = sortedArrayToBST(arr, 0, n-1)


// ----------- prettyPrint --------------
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  prettyPrint(root)
