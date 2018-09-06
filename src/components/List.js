import React from 'react';
import './List.css'

function List(props) {
    return <ul>
        {props.tasks.map(task => {
            const textDecoration = task.completed ? "line-through" :"none";
            const dueDate = task.date.split('-');
            const reformattedDate = `${dueDate[2]}/${dueDate[1]}/${dueDate[0]}`
            const urgencyColour = {
                'Whenevs': 'green',
                'Sometime soonish': 'lightgreen',
                "Should probably do it ASAP": 'orange',
                "Right this goddamn second": 'red'
            }
            return <li key={task.text}>
                <span style={{textDecoration: textDecoration}} onClick={() => props.toggleComplete(task)}>Task: {task.text}    Due: {reformattedDate}    Urgency: <span style={{color: urgencyColour[task.urgency]}}>{task.urgency}</span></span>
                <button onClick={() => props.deleteTask(task)}>Delete</button>
            </li>
        })}
    </ul>
}

export default List;