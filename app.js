import React from 'react';
import  ReactDOM  from "react-dom/client";

// const heading= React.createElement("h1", {}, "hello world");  //react element

//----------------React element inside component
const elem=<span>hehehehehhe</span>

        //JSX
// ------------------------

//--------------------Functional Component

// const HeadComponent=() =>{
   
//   return <h1>Hello ismail</h1>;
// }
const HeadComponent1=()=> (
  <div>
    {/* {JsxHeading} */}
  <h1>ismail hello</h1>
  </div>
);

const JsxHeading= (
  <>
  {elem}
<h1 className='heading'>namste react</h1>
<HeadComponent1/>
</>
); 

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent1 />);
root.render(JsxHeading)
