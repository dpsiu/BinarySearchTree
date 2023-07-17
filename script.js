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

function mergeSort(array) {
// Need base case. If length is <= 1 (one ele in array)
// define mid. define left then right.
// recursion. sortedLeft and sortedRight = recursive(left) and recursive(right)
// call merge(sortedLeft, sortedRight)

// merge(left, right)
// result array empty. leftIndex and rightIndex at 0.
// while both left and right have elements in them (index <= left.length and vice)
// if left > right, push left to result. leftIndex ++
// else push right

// then  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// and return

// THEN, function buildTree takes array, mergeSorts it, removeDuplicates, returns
// the level-0 root node
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

// Combines various functions to build BST 
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
    return finishedTree[Math.floor(n/2)]
}

// function levelOrder(node) {
//     if (node == null){
//         return
//     }
//     document.write(node.data + " ")
//     levelOrder(node.left)
//     levelOrder(node.right)
// }

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let n = arr.length


root = sortedArrayToBST(arr, 0, n-1)


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
