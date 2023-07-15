class Node {
    constructor(value) {
        this.value = value;
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



let arr = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]

// ([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

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
