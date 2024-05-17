

const counterBasic = () => {
    const [state,setState] = setState(0);
    const inc = ()=>{
      setState(state + 1);
    }
  
    return (
      <>
       <h1>Counter: {state}</h1>
       <button onClick={inc}>Click me</button>
      </>
    )
}

export default counterBasic
