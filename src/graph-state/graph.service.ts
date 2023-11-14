class GraphNode<T> {
  pattern: T;
  start: T;
  stop: T;
  duration: T;

  constructor(pattern: T, start: T, stop: T, duration: T) {
    this.pattern = pattern;
    this.start = start;
    this.stop = stop;
    this.duration = duration;
  }
}

export class GraphState<T> {
  nodes: Map<T, GraphNode<T>>;

  constructor() {
    this.nodes = new Map();
  }

  addPattern(pattern: T, start: T, stop: T, duration: T) {
    if (!this.nodes.has(pattern)) {
      const newNode = new GraphNode(pattern, start, stop, duration);
      this.nodes.set(pattern, newNode);
    }
  }
}