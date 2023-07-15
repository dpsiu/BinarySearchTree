class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

var root = null;

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

function removeDuplicates(arr){
    for (let i = 0; i < n; i++){
        if (arr[i] == arr[i+1]){
            console.log("duplicate found at " + i + " and " + (i + 1))
            arr.splice(i, 1)
        }
    }
    return arr
}

// function levelOrder(node) {
//     if (node == null){
//         return
//     }
//     document.write(node.data + " ")
//     levelOrder(node.left)
//     levelOrder(node.right)
// }

let arr = [1, 3, 3, 4, 5, 5, 7, 8, 9, 9, 23, 67, 324, 6345]

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
