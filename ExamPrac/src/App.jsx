import Form from "./Form"

function App(){

  const [count,setCount]=useState(0)
 
  const Inc = () =>{
    setCount(count+1)
  }

  const Dec = () =>{
    setCount(count-1)
  }



  return(
    <div>
      {/* <h1>Number : {count}</h1>
      <button onClick={Inc}>Increase</button>
      <button onClick={Dec}>Decrease</button> */}
      {/* < */}
      <Form/>
    </div>
  )
}

export default App; 