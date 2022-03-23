import React, { useState } from 'react'
import JSONDATA from "./MOCK_DATA.json"

export default function FiltterData() {
const [searchTerm, setSearchTerm] = useState("");

  return (
<>

<input type="text" placeholder='Search...' 

onChange={(event)=> {
    setSearchTerm(event.target.value); 
    // console.log(JSONDATA);
   }} />
    {/* {
    console.log(JSONDATA)
   } */}
   {JSONDATA.filter((val) =>{
   if(searchTerm === val.degination || val.full_name){
 console.log(JSONDATA);   
}
   {/* {JSONDATA.filter((val) =>{
       if(searchTerm == ""){
           return val
       }
       else if (val.degination.toLowerCase().includes(searchTerm.toLowerCase())){
           return val
       }
   })
   
  
   .map((val, key) => {
    // console.log(JSONDATA);
       return(
           <div className='user' key={key}>
               <h3>{val.full_name}</h3><p>{val.degination}</p>
           </div>
          
       );
   })
   } */}
</>

  );
}
