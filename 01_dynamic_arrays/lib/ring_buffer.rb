require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    self.capacity = 8
    self.store = StaticArray.new(capacity)
    self.length = 0
    self.start_idx = 0
  end

  # O(1)
  def [](index)
    check_index(index)
    self.store[wrap_idx(index)]
  end

  # O(1)
  def []=(index, val)
    check_index(index)
    self.store[wrap_idx(index)] = val
  end

  def wrap_idx(index)
    (self.start_idx + index) % self.capacity
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    self.length -= 1
    self.store[wrap_idx(length)]
  end

  # O(1) ammortized
  def push(val)
    resize! if length == capacity
    self.store[wrap_idx(length)] = val
    self.length += 1
  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0
    val = self.store[start_idx]
    self.start_idx = wrap_idx(1)
    self.length -= 1
    val
  end

  # O(1) ammortized
  def unshift(val)
    resize! if length == capacity

    self.start_idx = wrap_idx(-1)
    self.length += 1
    self.store[start_idx] = val
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if (self.length - 1) < index
  end

  def resize!
    new_capacity = self.capacity * 2
    new_store = StaticArray.new(new_capacity)
    self.length.times {|i| new_store[i] = self[i]}

    self.store = new_store
    self.capacity = new_capacity
    self.start_idx = 0
  end
end
