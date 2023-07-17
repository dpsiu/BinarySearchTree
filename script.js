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
// 

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
