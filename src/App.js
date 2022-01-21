import React from "react";
import Routes from "./routes";
import "./App.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile  = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
  const isBigScreen       = useMediaQuery({ query: '(min-width: 1824px)' })
  const isPortrait        = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina          = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  let screenQuery = "";
  if(isTabletOrMobile) {
      screenQuery = " mobile"
  }
  return (
    <div className={"App"+screenQuery}>
      <Routes screenQuery={screenQuery} ></Routes>
    </div>
  );
}

export default App;
