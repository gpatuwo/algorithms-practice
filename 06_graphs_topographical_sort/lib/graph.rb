class Vertex
  attr_reader :in_edges, :out_edges, :value

  def initialize(value)
    @in_edges = []
    @out_edges = []
    @value = value
  end
end

class Edge
  attr_accessor :from_vertex, :to_vertex, :cost

  def initialize(from_vertex, to_vertex, cost = 1)
    self.from_vertex = from_vertex
    self.to_vertex = to_vertex
    self.cost = cost

    from_vertex.out_edges << self
    to_vertex.in_edges << self
  end

  def destroy!
    from_vertex.out_edges.delete(self)
    to_vertex.in_edges.delete(self)
    self.from_vertex = nil
    self.to_vertex = nil
  end
end
