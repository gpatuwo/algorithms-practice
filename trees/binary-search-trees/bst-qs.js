// determin if btree is bst
function isBST(root) {
  return checkBst(root, Number.min_value, Number.max_value);
}

function checkBst(root, min, max) {
  if (root === null) {
    return true;
  }
  // inclusive of min/max
  if (root.value < min || root.value > max){
    return false;
  }

  // for unique values, de/increment value
  return checkBst(root.left, min, root.value - 1)
    && checkBst(root.right, root.value + 1, max);
}
