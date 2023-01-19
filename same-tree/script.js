/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // handle edge case were only one node
  if (!root.left && !root.right) return true

  // can we split the tree into left and right halfs
  let tree = {
    left: [],
    right: [],
  }
  let sideOfTree = 'left'

  function inOrder(node) {
    if (node) {
      inOrder(node.left)

      if (node.val === root.val) {
        sideOfTree = 'right'
        inOrder(root.right)
        if (node.val === root.val) return
      }

      tree[sideOfTree].push(node.val)
      inOrder(node.right)
    }
    else {
      tree[sideOfTree].push('null')
    }
  }
  inOrder(root);

  if (tree.left.length !== tree.right.length) {
    return false
  }
  else if (tree.left.every((node, index) => node === tree.right[index])) {
    return false
  }
  else {
    return true
  }
};
