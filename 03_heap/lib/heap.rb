class BinaryMinHeap
  def initialize(&prc)
    self.store = []
    self.prc = prc || Proc.new { |el1, el2| el1 <=> el2 }
  end

  def count
    store.length
  end

  def extract
    raise "no element to extract" if count == 0

    root = store[0]

    if count > 1
      # reassign the root to be the last node
      store[0] = store.pop
      self.class.heapify_down(store, 0, &prc)
    else
      # pop off the one and only el
      store.pop
    end

    root
  end


  def peek
    raise "no element to peek" if count == 0
    store[0]
  end

  def push(val)
    store.push(val)
    self.class.heapify_up(store, self.count - 1, &prc )
    #child_idx?
  end

  protected
  attr_accessor :prc, :store

  public
  def self.child_indices(len, parent_index)
    ans = []
    i = 1
    while i < 3
      index = (2*parent_index) + i
      ans.push(index) unless index >= len
      i += 1
    end
    ans
  end

  def self.parent_index(child_index)
    if child_index == 0
      raise "root has no parent"
    else
      (child_index - 1) / 2
    end
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    parent = array[parent_idx]
    children_idx = child_indices(len, parent_idx)
    children = []
    children << array[children_idx[0]] if children_idx[0]
    children << array[children_idx[1]] if children_idx[1]

    # check if all children > parent, if so return arr early
    if children.all? {|child| prc.call(parent, child) <= 0}
      return array
    end

    # assign swap id to the smaller of the two children
    if children_idx.count == 1
      swap_idx = children_idx.first
    else
      prc.call(children[0], children[1]) <= 0 ? swap_idx = children_idx[0] : swap_idx = children_idx[1]
    end

    # swap parent with smaller child (ie at swap_idx)
    array[parent_idx], array[swap_idx] = array[swap_idx], array[parent_idx]

    # keep going down the tree recursively
    heapify_down(array, swap_idx, len, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    # early return if child is root
    return array if child_idx == 0

    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    child = array[child_idx]
    parent_idx = parent_index(child_idx)
    parent = array[parent_idx]

    if prc.call(parent, child) <= 0
      return array
    else
      array[child_idx], array[parent_idx] = parent, child
      heapify_up(array, parent_idx, len, &prc)
    end
  end
end
