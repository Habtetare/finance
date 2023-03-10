import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter: 10,
        }; 
            this.increment = this.increment.bind(this)
            this.decriment = this.decriment.bind(this)
         
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    decriment(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render(){
        return (<div>
                <h3> Count is :{this.state.counter}</h3>
                <button onClick={this.increment}>Incriment</button>
                <button onClick={ this.decriment}>Decriment</button>
            </div>
        );
    }
}
export default Counter;