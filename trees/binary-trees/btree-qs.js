// EPI 9.1 test if btree is height-balanced
// PPP


//////////////////////////////////////
// EPI 9.2 test if btree is symmetric
// PPP


//////////////////////////////////////
// EPI 9.12 reconstruct btree from traversal data



//////////////////////////////////////


// return all single children
// http://www.geeksforgeeks.org/print-nodes-dont-sibling-binary-tree/
/*
input: tree. output: arr of node's values
traverse tree, find if node has a sibling (share same parent node)

go to node, check if it has a left AND a right child, then check left node and also right node
- if left null and not right, insert right's value into arr
- vice versa


bc: if node.left AND right are null, then return node's value
*/
function singleKids(tree){
  if (tree.root.left === null && tree.root.right === null) return null;

  checkNodes(tree.root);
}

function checkNodes(node) {
  if (node.left === null && node.right === null) return node.data;
}

//epi 9.2 pt 2 PPP
/*
symm when mirror image, so left.right = right.left

what's the input? -> tree
output is boolean? -> yes
children field available? -> no

*/
