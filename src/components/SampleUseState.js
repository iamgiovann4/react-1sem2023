import React, { useState } from 'react'

const SampleUseState = () => {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Fulano')

  return (
    <div>
        <h2>Contador: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>

        <hr/>

        <h2>Olá {name}!</h2>
        <button onClick={() => setName('Vítor')}>Vítor</button>
        <button onClick={() => setName('Giovanna')}>Giovanna</button>
    </div>
  )
}

export default SampleUseState