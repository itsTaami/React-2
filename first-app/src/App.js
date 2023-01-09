// import logo from './logo.svg';
// import './App.css';
import "./custom.scss";
import Btn from "./component/button";
import { useState } from "react";
import Home from "./component/pages/Home/Homepage";
// import { Home } from "./component/pages/Home";

// const btns = [
//   {
//     title: "Add",
//     variant: "primary",
//   },
//   {
//     title: "Minus",
//     variant: "secondary",
//   },
// ];

function App() {
  return (
    <div>
      <Home />
    </div>
  );
  // const [count, setCount] = useState(0);
  // // return <Detail />;
  // const handleClick = (title) => {
  //   if (title === "Add") {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  // return (
  //   <div>
  //     <h1>Counter: {count}</h1>
  //     {btns.map((btn) => (
  //       <Btn
  //         title={btn.title}
  //         variant={btn.variant}
  //         handleClick={handleClick}
  //       />
  //     ))}
  //   </div>
  // );
}
export default App;
