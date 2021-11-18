import React,{ memo } from "react";

interface ICountLabelProps {
    count:number;
}



const FirstState = () => {
  const [count, setCount] = React.useState(0);

  const ConstComp = () =>{
    console.log("abc");
    return "Hello";
  }

  function CountLabel({ count }:ICountLabelProps) {
    const color = count > 10 ? "red" : "blue";
    return <span style={{ color }}>{count}</span>;
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        xxx
        <CountLabel count={count} />
        {ConstComp()}
      </button>
    </div>
  );
};

export default  memo(FirstState)
