import React from 'react';

class TaskAdder extends React.Component {
    state = {
        text: "",
        date: "",
        urgency: ""
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>Task:
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                </label>
            <label>Due By:
                <input type="date" onChange={this.handleDate} value={this.state.date}/>
                </label>   
                <label>Urgency:
                    <select onChange={this.handleUrgency} >
                        <option defaultValue >Done by when?</option>
                        <option value="Whenevs">Whenevs</option>
                        <option value="Sometime soonish">Sometime soonish</option>
                        <option value="Should probably do it ASAP">Should probably do it ASAP</option>
                        <option value="Right this goddamn second">Right this goddamn second</option>
                    </select>     
                </label>  
     
            <button>Add!</button>
        </form>
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.text,this.state.date, this.state.urgency);
        this.setState({
            text: "",
            date: "",
            urgency: ""
        })
    }

    handleDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleUrgency = (event) => {
        console.log(event.target.value)
        this.setState({
            urgency: event.target.value
        })
    }
}

export default TaskAdder;