import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setcounter] = useState({
        counter1:0,
        counter2:10,
    })
    const {counter1,counter2}=counter
    const haddleAddCounter1=()=>{
        setcounter({
            ...counter,
            counter1:counter1+1,
        })
    }
    return (
        <div>
            <h2>{counter1}</h2>
            <h2>{counter2}</h2>

            <button
                className='btn btn-primary'
                onClick={haddleAddCounter1}
            >
                +1
            </button>
        </div>
    )
}

export default CounterApp;
