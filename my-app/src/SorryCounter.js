import React, { useState } from 'react'

export default function SorryCounter() {
    const [count, setCount] = useState(0)
  return (
    <>  
        <p>Sorry count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Sorry</button>
    </>
  )
}
