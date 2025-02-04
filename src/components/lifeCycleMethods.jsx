import React from "react";

class LifeCycleMethod extends React.Component{

    componentDidMount(){
        console.log('Component mounted');
    }

    componentDidUpdate(){
        console.log('Component update');

    }


    componentWillUnmount() {
        console.log("Component will unmount");
      }

      
    render(){
        return <h1>Life Cycle Method</h1>
    }
}

export default LifeCycleMethod