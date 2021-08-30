import StdoutType from './StdoutType';

export default class Stdout {
  type: string;

  data: string;

  constructor(type: StdoutType, data: string) {
    this.type = type.toString();
    this.data = data;
  }
}
