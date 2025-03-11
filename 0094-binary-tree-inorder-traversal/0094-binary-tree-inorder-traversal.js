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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const answer = [];
    const tmp = [];

    function recursion(node) {
        if(node === null) return;
        recursion(node.left);
        answer.push(node.val);
         recursion(node.right);
    }

    recursion(root);
    
    return answer; 
};