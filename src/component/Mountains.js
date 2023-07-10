import React from "react";
import Header from "./Header";
import FetchData from "./FetchData";


function Mountains(){
  return(
    <div>
      <Header />
      <FetchData SearchKeyword={'Mountains'}/>
    </div>
  )
}
export default Mountains