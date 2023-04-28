import React from "react";
import Header from "./Header";
import FetchData from "./FetchData";


function Food(){
  return(
    <div>
      <Header/>
      <FetchData SearchKeyword={'Food'}/>
    </div>
  )
}
export default Food