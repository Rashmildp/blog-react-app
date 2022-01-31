import { useState } from "react";

const Home=()=>{
    const [name, setName]=useState('Rashmi');
   const [age,setAge]=useState(25);
    const handleClick=()=>{
       setName('Duleesha');
       setAge(30);
        console.log(name);
    }
    const handleClickAgain=(name)=>{
        console.log("Hello "+name)
    }
    return(
        <div className="hopme">
            <h2>Home Page</h2>
            <p>{name} age {age} years old</p>
            <button onClick={handleClick}>Click Me!</button>
         
        </div>

    );

}
export  default Home;