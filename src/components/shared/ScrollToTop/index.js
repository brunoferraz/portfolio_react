import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function ScrollToTop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
    // alert("subindo")
  }
  useEffect(() => {
    //   console.log(routePath)
    onTop()
  }, [routePath]);
  
  return null;
}