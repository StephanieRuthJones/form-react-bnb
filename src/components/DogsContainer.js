import React from 'react'
import DogCard from './DogCard'

const DogsContainer = ({ dogs, editDog }) => {
    const dogCards = dogs.map(dog => {
        return <DogCard editDog={editDog} key={dog.id} dog={dog} />
    })

    return (
        <div>
            {dogCards}
        </div>

    )
}
export default DogsContainer