import React, { Component } from 'react'
import DogForm from './DogForm'

class DogCard extends Component {
    state = {
        showForm: false
    }

    submitHandler = dog => {
        this.props.editDog(this.props.dog.id, dog)
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        const { id, name, breed, age, image } = this.props.dog
        return (
            <div>
                <div key={id}>
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                    <p>{breed}</p>
                    <p>{age}</p>
                    <button onClick={this.toggleForm}>See Edit Form</button>
                </div>
                {this.state.showForm
                    ? <DogForm
                        submitValue='Edit Dog'
                        submitHandler={this.submitHandler}
                        defaultValues={{ name, breed, age, image }}
                    />
                    : null}
            </div>
        )
    }
}

export default DogCard