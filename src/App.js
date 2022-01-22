import React from "react";
import Routes from "./routes";
import "./App.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const oneColumn  = useMediaQuery({ query: '(max-width: 660px)' })
  const twoColumn  = useMediaQuery({ query: '(max-width: 1060px)' })
  const threeColumn = useMediaQuery({ query: '(max-width: 1460px)'})
  // const isBigScreen       = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isPortrait        = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina          = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  let screenQuery = "";
  if(threeColumn) screenQuery = " threeColumn";
  if(twoColumn) screenQuery = " mobile twoColumn";
  if(oneColumn) screenQuery = " mobile oneColumn";
  
  
  return (
    <div className={"App"+screenQuery}>
      <Routes screenQuery={screenQuery} ></Routes>
    </div>
  );
}

export default App;
