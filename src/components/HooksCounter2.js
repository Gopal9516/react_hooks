import React, { useState } from 'react'

export default function HooksCounter2() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
  return (
    <div>
        <hr></hr>
        count:{count}<br></br>
        <button onClick={()=>setCount(initialCount)}>Reset</button><br></br>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(count+5)}>Increment 5</button>
    </div>
  )
}
