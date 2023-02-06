import { useState } from "react"
import cl from './Counter.module.scss'

function Counter() {
    const[count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button className={cl.btn} onClick={increase}>increase</button>
        </div>
    )
}

export default Counter
