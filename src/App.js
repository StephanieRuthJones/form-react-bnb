import React, { Component } from 'react';
import './App.css';

import DogForm from './components/DogForm'
import DogsContainer from './components/DogsContainer'

const BASE_URL = 'https://dogs-backend.herokuapp.com/dogs'

class App extends Component {
  state = {
    dogs: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  addDog = dog => {
    this.setState({ dogs: [...this.state.dogs, dog] })

    fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    }).then(response => response.json())
      .then(console.log)
      .catch(error => console.log(error))
  }

  editDog = (id, dog) => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    }).then(() => {
      this.setState({
        dogs: [
          ...this.state.dogs
            .map(existingDog => {
              console.log('existingDog', existingDog)
              if (existingDog.id === id) {
                Object.assign(existingDog, dog)
              }
              return existingDog
            })
        ]
      })
    })
  }

  render() {
    console.log('state', this.state.dogs)
    return (
      <div className="App" >
        <DogForm
          submitValue='Add New Dog'
          submitHandler={this.addDog}
        />
        <DogsContainer
          dogs={this.state.dogs}
          editDog={this.editDog}
        />
      </div>
    );
  }
}

export default App;
