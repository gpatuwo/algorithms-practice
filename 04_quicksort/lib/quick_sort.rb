class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory bc in worst case (ie sorted arr) the call stack will take up that much extra space
  def sort1(arr)
    return arr if arr.length <= 1
    pivot = arr.first
    left_side = arr[1..-1].select{|el| el < pivot}
    right_side = arr[1..-1].select {|el| el >= pivot}
    sort1(left_side).push(pivot) + sort1(right_side)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    return array if length <= 1

    pivot_idx = partition(array, start, length, &prc)
    left_length = pivot_idx - start
    right_length = length - (left_length + 1)

    # quicksort the two sides in place
    sort2!(array, start, left_length, &prc)
    sort2!(array, pivot_idx + 1, right_length, &prc)

    array
  end


  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    # reassign var to a) choose random pivot b)not mess with the start var when iterating over it
    pivot_idx, pivot = start, array[start]

    # iterate over this range so can modify arr
    ((start + 1)...(start + length)).each do |idx|
      val = array[idx] # dry up code AND save it for later
      # if val < pivot,
        # then swap val and pivot
        # and reassign pivot idx
      if prc.call(pivot, val) == 1
        array[idx] = array[pivot_idx + 1]
        array[pivot_idx + 1] = pivot
        array[pivot_idx] = val
        pivot_idx += 1
      end
    end
    pivot_idx
  end
end
