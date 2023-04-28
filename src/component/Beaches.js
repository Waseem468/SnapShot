import React from "react";
import Header from "./Header";
import FetchData from "./FetchData";


function Beaches(){
  return(
    <div>
      <Header/>
      <FetchData SearchKeyword={'Beaches'}/>
    </div>
  )
}
export default Beaches