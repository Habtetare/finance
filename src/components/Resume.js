import { Component } from "react";

class Resume extends Component{
    render(){
        const {name} = this.props;
        return<h3>This class components: {name}</h3>
    }
}
export default Resume;