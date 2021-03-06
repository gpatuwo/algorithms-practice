require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @capacity = 8
    @store = StaticArray.new(@capacity)
    @length = 0
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    @length -= 1
    # length -1 first bc also get correct index
    @store[@length]
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible resize.
  def push(val)
    resize! if @length == @capacity
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    val = @store[0]
    @length -= 1
    @store[0] = nil
    @length.times {|i| @store[i], @store[i+1] = @store[i+1], @store[i]}
    val
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length == @capacity
    (@length - 1).downto(0).each {|i| @store[i + 1] = @store[i]}
    @length += 1
    @store[0] = val

    nil
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    raise "index out of bounds" if (@length - 1) < index
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_capacity = @capacity * 2
    new_store = StaticArray.new(new_capacity)
    @length.times {|i| new_store[i] = @store[i]}

    @store = new_store
    @capacity = new_capacity
  end
end
