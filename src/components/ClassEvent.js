import { Component } from "react";

class CLassEvent extends Component{
    CLassEvents(){
        console.log("class event clicked");
    }
    render(){
        return(
            
                <div>
                    THis is Class CLassEvent
                    <button onClick={this.CLassEvents}>click here</button>
                </div>
            
        );
    }
}
export default CLassEvent;