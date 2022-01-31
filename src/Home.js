import { useState } from "react";

const Home=()=>{
    const [name, setName]=useState('Rashmi');
   const [age,setAge]=useState(25);
   const [blogs,setblogs]=useState([
       {title:'Hello world', body: 'Helll sxxvvf dfdts', author:'Rashmi', id:1},
       {title:'Welcome to the RecatJs', body: 'React is very popular frontend library', author:'Rashmi', id:2},
       {title:'Welcome to the .NET', body: 'New version is .NET6', author:'Rashmi', id:3},
   ])
    const handleClick=()=>{
      
    }
   
    return(
        <div className="home">
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>

        ))}
         
           
        </div>

    );

}
export  default Home;