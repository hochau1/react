function Hello(){
    const hiYou=(name)=>{
        alert("Hello "+ name)
    }
    const hiAll=()=>{
        alert("hello everyone")
    }
    return(
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={()=>hiYou("Peter")}>Hi you</button>
        </span>
        
    )
}

export default Hello