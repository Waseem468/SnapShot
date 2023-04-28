import React from "react";
import Header from "./Header";
import FetchData from "./FetchData";


function Birds(){
  return(
    <div>
      <Header/>
      <FetchData SearchKeyword={'Birds'}/>
    </div>
  )
}
export default Birds