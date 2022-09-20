import './App.css';
import React, { Component } from "react";
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        position: '',
    },
      taskList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        position: this.state.taskList.indexOf(this.state.task),
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.concat(this.state.task),
      task: {text: '',
             id: uniqid(),
    },
    })
  }

  render() {
    const {task, taskList} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"
                   id="taskInput"
                   value={task.text}
                   onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Overview taskList = {taskList}/>
      </div>
    );
  }
}

export default App;
