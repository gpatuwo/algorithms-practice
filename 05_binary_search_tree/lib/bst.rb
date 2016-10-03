class BSTNode
  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

class BinarySearchTree
  def initialize
    @root = nil
  end

  def insert(value)
    # spec not passing???!!
    if !@root
      return @root = BSTNode.new(value)
    end
    BinarySearchTree.insert!(@root, value)
  end

  def find(value)
    BinarySearchTree.find!(@root, value)
  end

  def inorder
    BinarySearchTree.inorder!(@root)
  end

  def postorder
    BinarySearchTree.postorder!(@root)
  end

  def preorder
    BinarySearchTree.preorder!(@root)
  end

  def height
    BinarySearchTree.height!(@root)
  end

  def min
    BinarySearchTree.min(@root)
  end

  def max
    BinarySearchTree.max(@root)
  end

  def delete(value)
    BinarySearchTree.delete!(@root, value)
  end

  def self.insert!(node, value)
    unless node
      return BSTNode.new(value)
    end

    if value <= node.value
      node.left = BinarySearchTree.insert!(node.left, value)
    else
      node.right = BinarySearchTree.insert!(node.right, value)
    end

    node
  end

  def self.find!(node, value)
    # returns nil if no more nodes
    return nil unless node
    # early return if find val
    return node if node.value == value

    if value <= node.value
      BinarySearchTree.find!(node.left, value)
    else
      BinarySearchTree.find!(node.right, value)
    end
  end

  def self.inorder!(node)
    return [] unless node
    # redo this w/o solutions...
    ans = []
    ans += BinarySearchTree.inorder!(node.left) if node.left
    ans << node.value
    ans += BinarySearchTree.inorder!(node.right) if node.right
    ans
  end

  def self.preorder!(node)
    return [] unless node

    ans = [node.value]
    ans += BinarySearchTree.preorder!(node.left) if node.left
    ans += BinarySearchTree.preorder!(node.right) if node.right

    ans
  end

  def self.postorder!(node)
    return [] unless node

    ans = []
    ans += BinarySearchTree.postorder!(node.left) if node.left
    ans += BinarySearchTree.postorder!(node.right) if node.right
    ans << node.value

    ans
  end

  def self.height!(node)
    return -1 unless node

    1 + [BinarySearchTree.height!(node.right), BinarySearchTree.height!(node.left)].max
  end

  def self.max(node)
    # if no node passed in
    return nil unless node
    # max value found at the end of right subtrees
    return node unless node.right

    BinarySearchTree.max(node.right)
  end

  def self.min(node)
    return nil unless node
    return node unless node.left
    BinarySearchTree.min(node.left)
  end

  # takes in parent node. deletes node w/min value
  def self.delete_min!(node)
    return nil unless node
    return node.right unless node.left
    # reassign left node with the return val to delete
    node.left = BinarySearchTree.delete_min!(node.left)
    node
  end

  def self.delete!(node, value)
    return nil unless node
    # review this below
    if value < node.value
      node.left = BinarySearchTree.delete!(node.left, value)
    elsif value > node.value
      node.right = BinarySearchTree.delete!(node.right, value)
    else
      return node.left unless node.right
      return node.right unless node.left
      t = node
      node = t.right.min
      node.right = BinarySearchTree.delete_min!(t.right)
      node.left = t.left
    end

    node
  end
end
