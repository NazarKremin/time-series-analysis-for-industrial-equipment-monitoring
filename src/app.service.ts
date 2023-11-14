import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  static analyzeTimeSeries(signals: number[]) {
    for (let i = 0; i < signals.length; i++) {
      const previous = signals[i == 0 ? signals.length - 1 : i - 1];
      const current = signals[i];
      const next = signals[i == signals.length - 1 ? 0 : i + 1];
      if (previous === 2 && current === 8) {
        const startTime = signals.indexOf(current, i);
        const endTime =
          signals.lastIndexOf(9, signals.length) !== -1
            ? signals.lastIndexOf(9, signals.length)
            : signals.lastIndexOf(8, signals.length);

        const duration = (endTime - startTime).toString();
        graphState.addPattern(
          '289',
          startTime.toString(),
          endTime.toString(),
          duration,
        );
      } else if (previous === 9 && current === 8) {
        const startTime = signals.indexOf(current, i);
        const endTime =
          signals.lastIndexOf(9, signals.length) !== -1
            ? signals.lastIndexOf(9, signals.length)
            : signals.lastIndexOf(8, signals.length);

        const duration = (endTime - startTime).toString();
        graphState.addPattern(
          '989',
          startTime.toString(),
          endTime.toString(),
          duration,
        );
      } else if (previous === 2 && current === 8 && next === 2) {
        const startTime = signals.indexOf(current, i);
        const endTime =
          signals.lastIndexOf(9, signals.length) !== -1
            ? signals.lastIndexOf(9, signals.length)
            : signals.lastIndexOf(8, signals.length);

        const duration = (endTime - startTime).toString();
        graphState.addPattern(
          '282',
          startTime.toString(),
          endTime.toString(),
          duration,
        );
      }
    }

    return {
      '289': graphState.nodes.get('289'),
      '989': graphState.nodes.get('989'),
      '282': graphState.nodes.get('282'),
    };
  }

  static testPattern(signals: number[]) {
    const patterns: RegExp = /(2,8,9)|(9,8,9)|(2,8,2)|(289)|(989)|(282)/g;

    const matches = signals.toString().match(patterns);

    if (!matches) {
      return [];
    }

    return matches;
  }
}

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

const graphState = new GraphState<string>();
