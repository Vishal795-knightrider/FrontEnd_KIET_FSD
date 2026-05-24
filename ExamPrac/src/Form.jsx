
const form = () =>{

const [username,setUsername]=useState('')
     
    return(
        <div>  
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}> 
                <input
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                placeholder="Enter Name"
                type="text"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default form;