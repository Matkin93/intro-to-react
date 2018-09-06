import React, { Component } from 'react';
import List from './components/List';
import TaskAdder from './components/TaskAdder';
import FilterByUrgency from './components/FilterByUrgency'
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { text: 'Do a food shop', completed: false, date: '2019-09-09', urgency: 'Whenevs' },
      { text: 'master the ways of JSX', completed: false, date: '2019-09-09', urgency: 'Whenevs' }
    ],
    currentUrgency: ''
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <TaskAdder addTask={this.addTask} />
        <List tasks={this.state.tasks.filter(task => task.urgency.includes(this.state.currentUrgency))} deleteTask={this.deleteTask} toggleComplete={this.toggleComplete} />
        <FilterByUrgency setCurrentUrgency={this.setCurrentUrgency}/>
      </div>
    );
  }

  deleteTask = (taskToDelete) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToDelete)
    })
  }

  addTask = (textToAdd, dateToAdd, urgencyToAdd) => {
    const tasks = this.state.tasks.concat([{ text: textToAdd, completed: false, date: dateToAdd, urgency: urgencyToAdd }]);
    this.setState({
      tasks
    })
  }

  toggleComplete = (taskToToggle) => {
    const updateTask = this.state.tasks.map(task => {
      if (task === taskToToggle) {
        return {
          text: task.text,
          completed: !task.completed,
          date: task.date
        }
      } else return task
    })

    this.setState({
      tasks: updateTask
    })
  }

  setCurrentUrgency = (urgency) =>{
    this.setState({
      currentUrgency:urgency
    }, () => {
      console.log(urgency)
    })
  }
}

export default App;
