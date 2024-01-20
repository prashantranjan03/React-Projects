import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)
  

  const addValue = () => {
    if(counter<20){
    setCounter(counter + 1);
    }
    else{
      alert('Time Limit exceeded')
    }
  }
  
  const removeValue = () => {
    if(counter>0){
      setCounter(counter -1)
    }
    else{
      alert('Time Limit exceeded')
    }
  }
  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}
     >Add Value</button>
     <br/><br/>
     <button  onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
