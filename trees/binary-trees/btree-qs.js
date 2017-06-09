// EPI 9.1 test if btree is height-balanced
// PPP


//////////////////////////////////////
// EPI 9.2 test if btree is symmetric
// PPP


//////////////////////////////////////
// EPI 9.12 reconstruct btree from traversal data
// given inorder traversal path + another traversal order
// ex inorder: [f, b, a, e, h, c, d, i, g], preorder [h, b, f, e, a, c, d, g, i]

/*
inorder:
  - first key is left most node
  - left traversal, root, right traversal
preorder:
  - first key is root
  - root, left traversal, right traversal
*/

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inorder, preorder) {
  let root = new TreeNode(preorder[0]);

  buildSubTrees(inorder, preorder, root);

  return root;
}

function buildSubTrees(inorder, preorder, root) {
  if (preorder.length <= 1) return;

  let inorderRootIdx;
  for (var i = 0; i < inorder.length; i++) {
    if (inorder[i] === preorder[0]) inorderRootIdx = i;
  }

  let inorderLeft = inorder.slice(0, inorderRootIdx),
      inorderRight = inorder.slice(inorderRootIdx + 1),
      preorderLeft = preorder.slice(1, inorderRootIdx + 1),
      preorderRight = preorder.slice(inorderRootIdx + 1);

  root.left = preorderLeft[0] ?
    new TreeNode(preorderLeft[0]) : null;
  root.right = preorderRight[0] ?
    new TreeNode(preorderRight[0]) : null;

  buildSubTrees(inorderLeft, preorderLeft, root.left);
  buildSubTrees(inorderRight, preorderRight, root.right);
}

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
