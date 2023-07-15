# BinarySearchTree

As part of The Odin Project, my task is to build a binary search tree that accomploshes the following. 

1. Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.

2. Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.

3. Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

4. Write an insert and delete functions which accepts a value to insert/delete

5. Write a find function which accepts a value and returns the node with the given value.

6. Write a levelOrder function which accepts another function as a parameter. levelOrder should traverse the tree in breadth-first level order and provide each node as the argument to the provided function.

7. Write inorder, preorder, and postorder functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. 

8. Write a height function which accepts a node and returns its height.

9. Write a depth function which accepts a node and returns its depth.

10. Write a isBalanced function which checks if the tree is balanced.

11. Write a rebalance function which rebalances an unbalanced tree.