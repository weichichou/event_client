import React from 'react'
import internet from 'superagent'

export default class CreateEventForm extends React.Component {
    state = {
        name: '',
        date: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        internet
            .post('http://localhost:4000/events')
            .send(this.state)
            .then(res => console.log('create form body', res.body))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input onChange={this.handleChange} type='text' name='name' value={this.state.name} required />
                </label>
                <label>Date:
                    <input onChange={this.handleChange} type='text' name='date' value={this.state.date} required />
                </label>
                <label>Description:
                    <input onChange={this.handleChange} type='text' name='description' value={this.state.description} required />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}