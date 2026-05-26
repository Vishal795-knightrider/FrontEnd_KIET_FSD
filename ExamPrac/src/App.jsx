import {useEffect,useState} from "react"

// export default function App(){

//   const foodName="Burger";
//   const price=100;

//   const [quantity,setQuantity]=useState(1);

//   const Increase=()=>{
//     if(quantity<10){
//     setQuantity(quantity+1);
//   }
// }

//   const Decrease=()=>{
//     if(quantity>1){
//     setQuantity(quantity-1);
//   }
// }

//   return(
//     <div>
//       <h1>Quick Bite Food</h1>

//       <h2>{foodName}</h2>
//       <h3>Price : {price}</h3>

//       <h2>Quantity :{quantity}</h2>
//       <button onClick={Increase}>Increase</button>
//       <button onClick={Decrease}>Decrease</button>

//       <br />
//       <br />  
//       <h2>Total Amount: {price*quantity}</h2>
//     </div>
//   )
// }


// export default function App(){

//   const [employee,setEmployee]=useState({
//     name:"",
//     department:"",
//     feedback:""
//   });

//   const [record,setRecord]=useState([]);

//   const handleChange=()=>{
//     e.preventDefault();


//   }




//   return(
//     <div>
//       <h1>Employee fedback</h1>

//       <form>
//         <input type="text"
//         placeholder="Enter your name"
//         value={}
//         onChange={handleChange}
//         />

//         <input type="text" 
//         placeholder="Department"
//         value={}
//         onChange={handleChange}
//         />
//       </form>
//     </div>
//   )
// }


// export default function App(){

//   const [title,setTitle]=useState("")
//   const [amount,setAmount]=useState("")

//   const [expenses,setExpenses]=useState([]);

//   const addExpense=()=>{
//     if(!title || !amount) return;

//     const newExpense ={
//       title,
//       amount: Number(amount)
//     }

//     setExpenses([...expenses,newExpense])

//     set
//   }



//   return(
//     <div>
//       <h1>Expense Tracker</h1>
//       <input type="text" 
//       placeholder="Expense Title"
//       value={title}
//       onChange={()=>setTitle(e.target.value)}
//       />

//       <input type="number" 
//       placeholder="Amount"
//       value={amount}
//       onChange={(e)=>setAmount(e.target.value)}
//       />

//       <button onClick={addExpense}>Add Expense</button>

//       expenses.map((item, index) => (
//         <div key={index}>
//           <p>{item.title}</p>
//           <p>₹{item.amount}</p>
//         </div>
//       ))
//     </div>
//   );
//     </div>
//   ) 
// }


export default function App(){

  const [employee,setEmployee]=useState({
    name: "",
    department: "",
    feedback: ""
  })

  const [record,setRecord]=useState([])

  useEffect(()=>{
    const saved=localStorage.getItem("feedbackData");
    if(saved){
      setReccord(JSON.pasrse(saved));
    }
  },[]);

  const handleChange=()=>{
  setEmployee({
    ...employee,
    [e.target.name]: e.target.value,
  })
}


  const handleSubmit=(e)=>{
    e.preventdefault();
    
    const updatedRecords=([...record,employee])

    setRecord(updatedRecords)


    localStorage.setItem("FeedbackData",JSON.stringify(updatedRecords));

    setEmployee({
      name:"",
      department:"",
      feedback:""
    })


  }

  return(
    <div>
      <h1>Employee Feedback</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <textarea
          name="feedback"
          placeholder="Feedback"
          value={employee.feedback}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      <h2>Submitted Records</h2>

      {record.map((item,index)=>(
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.department}</p>
          <p>{item.feedback}</p>
        </div>
      ))}
    </div>
  )
}

