import React, { Component } from 'react'

class DogForm extends Component {
    state = {
        name: '',
        breed: '',
        age: 0,
        image: ''
    }

    componentDidMount() {
        this.props.defaultValues && this.setState(this.props.defaultValues)
    }

    handleChange = event => {
        const newDog = {}
        newDog[event.target.name] = event.target.value
        this.setState(newDog)
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
         
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Dog Name</label>
                <input
                    name='name'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <label>Dog Breed</label>
                <input
                    name='breed'
                    type='text'
                    value={this.state.breed}
                    onChange={this.handleChange}
                    required
                />
                <label>Dog Age</label>
                <input
                    name='age'
                    type='number'
                    value={this.state.age}
                    onChange={this.handleChange}
                    required
                />
                <label>Dog Image URL</label>
                <input
                    name='image'
                    type='text'
                    value={this.state.image}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type='submit'
                    value={this.props.submitValue}
                />
            </form>
        )
    }

}

export default DogForm

