// EPI 9.2 test if btree is symmetric
// PPP
/*
symmetry = left + right are mirrored (structurally and value-wise)

test if left is same as right on other branch
reversively check if node.left === node.right

what if tree is null?
check null or checkSym

checkSym
  - bc: if subtreeL AND subtreeR are both null,
  we've reach end of tree, return true
  - if subtreeL.value != subtreeR.value, return false
  - checkSym(subtreeR.left, subtreeL.right) AND vice versa
*/
function isSymmetric(tree){
  return tree === null || checkSym(tree.left, tree.right);
}

function checkSym(subtreeL, subtreeR) {
  if (subtreeL === null && subtreeR === null) return true;

  return subtreeL.value === subtreeR.value
         && checkSym(subtreeR.left, subtreeL.right)
         && checkSym(subtreeL.left, subtreeR.right);
}



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
