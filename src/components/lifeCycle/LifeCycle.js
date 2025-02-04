import React from "react"

class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state = {count : 0} 
    }


    componentDidMount() { // useEffect
        console.log("componentDidMount called");
        // This method is called right after the component is inserted into the DOM. It's used for performing tasks that require interaction with the DOM or for fetching initial data from an API. It's only called once, after the initial render.
    }

    componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    // This method is called after the component's update has been committed to the DOM. It's triggered whenever the component's state or props change and a re-render occurs. It's commonly used for updating the DOM based on new data or interacting with external libraries after a component update.
    }


    componentWillUnmount() {
        console.log("componentWillUnmount called");
        // This method is called right before the component is removed from the DOM. It's used to clean up any resources or subscriptions that the component might have established during its lifecycle, preventing memory leaks.
      }


    shouldComponentUpdate(nextProps, nextState) {
    // Compare the current and next props to decide if re-render is needed
    if (
        this.props.name === nextProps.name &&
        this.props.age === nextProps.age
    ) {
        return false; // Don't re-render if name and age haven't changed
    }
    return true; // Re-render for other prop changes

    // : This method is called before a component re-renders due to changes in props or state. It's used to optimize performance by determining if a re-render is necessary. If you return false from this method, the component won't re-render, which can be useful when you know that a change won't affect the component's output.
    }


    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
      };
    render(){
        return (
            <div>
                <h1>Life Cycle methods</h1>

                <h3>{this.state.count}</h3>
                <button onClick={this.incrementCount}>click</button>
            </div>
        )
    }
}

export default LifeCycleMethods