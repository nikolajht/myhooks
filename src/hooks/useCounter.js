import { useState } from "react";

// en simpel hook til at håndtere en tæller

function useCounter(initialValue = 0){

    const [count, setCount] = useState(initialValue)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return {count, increment, decrement}

}

export default useCounter;