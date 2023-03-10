import { Component } from "react";
// three way of binding event
class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter: 10,
        }; 

            this.decriment = this.decriment.bind(this)
         
    }
    increment =()=>{
        console.log("incriment")
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    increment2 (){
        console.log("incriment")
        this.setState({
            counter: this.state.counter + 2,
        })
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
                <button onClick={() => this.increment2()}>increment2</button>
            </div>
        );
    }
}
export default Counter;