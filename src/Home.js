import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home=()=>{
    const [name, setName]=useState('Rashmi');
   const [age,setAge]=useState(25);
   const [blogs,setblogs]=useState([
       {title:'Hello world', body: 'Helll sxxvvf dfdts', author:'Rashmi', id:1},
       {title:'Welcome to the RecatJs', body: 'React is very popular frontend library', author:'Rashmi', id:2},
       {title:'Welcome to the .NET', body: 'New version is .NET6', author:'Duleesha', id:3},
   ])
    const handleClick=()=>{
      
    }
    const handleDelete=(id)=>{

        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setblogs(newBlogs);
    }
   useEffect(()=>{
       console.log('Use effect run');
       console.log(blogs);
   },[])
    return(
        <div className="home">
    
         <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
         
         
      
           
        </div>

    );

}
export  default Home;