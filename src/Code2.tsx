import  { Component } from "react";
//create interface for the count prop of the Counter component to define its type
interface CountType {
    //define the count type as a number
  count: number;
}
//<{},CountType> is a generic type for the Counter component
class Counter extends Component<{},CountType> {
    //define the state of the Counter component as a CountType
  state: CountType = {
    count: 0,
  };
  //the increment method returns void and takes no arguments
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
