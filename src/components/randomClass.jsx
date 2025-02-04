import React from "react";  

class RandomClass extends React.Component{
    state = {count : 0}

    increamnet = ()=>{
        this.setState({count : this.state.count + 1})
    }

    render(){
        return (
            <div>
                <p>Count : { this.state.count}</p>
                <button onClick={this.increamnet}>increamnet</button>
            </div>
        )
    }
}

export default RandomClass