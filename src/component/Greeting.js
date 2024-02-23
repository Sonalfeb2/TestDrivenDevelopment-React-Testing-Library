import { useState } from "react";

const Greeting = () => {
  const [isChanged, setIsChanged] = useState(false);
  const handler = ()=>{
    setIsChanged(!isChanged)
}
  return (
    <div>
      <h1> Hello World</h1>
      
      {!isChanged && <p>Good to see you</p>}
      {isChanged && <p>Changed</p>}
      
      <button aria-pressed={isChanged}  onClick={handler}>Change</button>
    </div>
  );
};
export default Greeting;
