import React from 'react';

class FilterByUrgency extends React.Component {
    state = {
        urgency: ''
    }

    render() {
        return <form onSubmit={this.filter}>
        <label>Filter By Urgency:
        <select onChange={this.handleUrgency} >
            <option selected disabled >Choose Urgency</option>
            <option value=''>All</option>
            <option value="Whenevs">Whenevs</option>
            <option value="Sometime soonish">Sometime soonish</option>
            <option value="Should probably do it ASAP">Should probably do it ASAP</option>
            <option value="Right this goddamn second">Right this goddamn second</option>
        </select>
        <button>Filter</button>     
    </label> 
    </form>
    }

    handleUrgency = (event) => {
        this.setState({
            urgency: event.target.value
        })
    }

    filter = (event) => {
        event.preventDefault();
        this.props.setCurrentUrgency(this.state.urgency);
        this.setState({
            urgency:''
        })
    }
}

export default FilterByUrgency;