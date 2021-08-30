import Stdout from './Stdout';
import CheckoutType from './CheckoutType';

export default class Checkout {
  type: string;

  stdout: Stdout;

  constructor(type: CheckoutType, stdout: Stdout) {
    this.type = type.toString();
    this.stdout = stdout;
  }
}
