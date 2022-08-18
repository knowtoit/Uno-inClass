// class component that shows Hello world!

import React from "react"; 
//linking css
//import <path to file>
 import "./index.css";
 import Counter from "./components/Counter";

class App extends React.Component{
  

  render(){
    return(
      <>
      <Counter/>
      <Counter/>
      </>
    ); 
    return <Counter></Counter>;
  }
}

export default App;
