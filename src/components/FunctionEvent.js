function FunctionEvent(){
    /*function ClickHandelr()
    {
        console.log("Button clicked");
    }*/
    const ClickHandelr =()=>{
        console.log("Arrow function")
    }
    return(
        
            <div>
            Functional_Component
            <button onClick={ClickHandelr}>Click Here</button>
            </div>
        
    )
}
export default FunctionEvent;