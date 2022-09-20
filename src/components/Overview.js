import React, { Component } from "react";

class Overview extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const taskList = this.props.taskList;
        // const myList = this.props.taskList;
        // const listItems = 
        // myList.map((myList, index) =>  
        // <li key={index.toString()}>{myList}</li>);
        return <div>
        <h1>Task List</h1>
        <ul>
            <li>Task One</li>
            <li>Task two</li>
            <li>Task 3</li>
        </ul>
        <ul>{taskList.map((task) => {
            return <li key={task.id}>{task.position} + {task.text}</li>;
        })}</ul>
    </div>;
    }
}

export default Overview;