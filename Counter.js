import React from "react";

class Counter extends React.Component{
    constructor(){
        //Always call super first
        super();
    
    
        this.state={
          counter:0
        }
    
      }
      
    render(){
        return(<React.Fragment>
            {/* {Anything you want to computed or write JS code, wrap it in {}} */}
            <h1 className="counter">{this.state.counter}</h1>
    
            <button onClick={()=>{
              //Increament the counter variable
              this.setState({
                //pass only those keys you need to chnage 
                counter: this.state.counter+1,
              });
            }}>Increment</button>
    
            <button onClick={()=>{
              if (this.state.counter > 0)
              this.setState({
                counter: this.state.counter-1,
              });
            }}>Decrement</button>
            </React.Fragment>
            );
    }
}

export default Counter;
