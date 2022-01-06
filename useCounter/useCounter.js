import { useState } from "react"


export const useCounter = (initialState = 10) => {
   
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1 )
    }

    const decrement = () => {
        setCounter( counter - 1 )
    }

    const reset = () => {
        setCounter(initialState)
    }

    //esta funcion usecounter va a devolver el estado, y las dos funciones
    return { 
        counter,
        increment, 
        decrement,
        reset
    }
}

