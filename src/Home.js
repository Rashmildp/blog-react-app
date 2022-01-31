

const Home=()=>{
    const handleClick=()=>{
        console.log("Hello World");
    }
    const handleClickAgain=(name)=>{
        console.log("Hello "+name)
    }
    return(
        <div className="hopme">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClickAgain('rashmi')}> Click me again</button>
        </div>

    );

}
export  default Home;