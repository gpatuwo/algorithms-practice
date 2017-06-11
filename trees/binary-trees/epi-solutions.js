// EPI 9.1 test if btree is height-balanced

// feed tree in here
function isTreeBalanced(tree) {
  return checkBalanced(tree).balanced;
}

class BalanceStatusWithHeight {
  constructor(balanced, height) {
    this.balanced = balanced;
    this.height = height;
  }
}

// returns BalanceStatusWithHeight obj
function checkBalanced(tree) {
  if (tree === null) {
    return new BalanceStatusWithHeight(true, -1);
  } // base case

  let leftResult = checkBalanced(tree.left);
  if (!leftResult.balanced) return leftResult;

  let rightResult = checkBalanced(tree.right);
  if (!rightResult.balanced) return rightResult;

  let isBalanced = Math.abs(leftResult.height - rightResult.height) <= 1;
  let height = Math.max(leftResult.height, rightResult.height) + 1;

  return new BalanceStatusWithHeight(isBalanced, height);
}

// time: O(n), n = num of nodes. bc postorder traversal
// space: O(h), h = height of tree


//////////////////////////////////////
// EPI 9.2 test if btree is symmetric
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

function isSymmetric(tree) {
  return tree === null || checkSym(tree.left, tree.right);
}

function checkSym(subtree1, subtree2) {
  if (subtree1 === null && subtree2 === null) {
    return true;
  } else if (subtree1 !== null && subtree2 !== null) {
    return subtree1.value === subtree2.value
        && checkSym(subtree1.left === subtree2.right)
        && checkSym(subtree1.right === subtree2.left);
  }

  // if one subtree is empty, other is not
  return false;
}

// time: O(n)
// space: O(h)


//////////////////////////////////////
// EPI 9.12 reconstruct btree from traversal data
/*
input: arr of inorder seq values, preorder seq
output: reconstruct the tree

- make sample tree so can visually see the 2 traversals
  - know the root is preorder[0]
*/


//////////////////////////////////////
