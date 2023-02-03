import { useState } from "react"

function Counter() {
    const[count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>increase</button>
        </div>
    )
}

export default Counter
