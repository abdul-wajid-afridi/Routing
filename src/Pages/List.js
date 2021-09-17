import React, { useState } from 'react';
import logoreact from "../assests/logoreact.png";
function List(props) {
    // const Books=[
    //     [
    //        { id:1},
    //        { title:"The Road To React"},
    //        { Author:"Jhone Spike"},
    //        { Image:{logoreact}},
    //         {pages:208},
    //     ]
    //     // {
    //     //     id:2,
    //     //     title:"The Road To Redux",
    //     //     Author:"Jhone Spike",
    //     //     Image:{logoreact},
    //     //     pages:408,
    //     // }
    // ]
const User={
    details:[
    {name:"ali khan"},
    {books:"react"},
    ]}


   const[name,setname] =useState("data")
  
    return (
        <div>
        {User.details.map(items=>{
            return(
               <div>
               <p>{items.name} {items.books}</p>
               <p>{items.name} {items.books}</p>
               {name}
               </div>
            )
        })}
           <p></p>
        <button onClick={()=>{setname('my new updated name')}}>Change</button>
        <input onChange={(event)=>setname(event.target.value)}/>
        </div>
    );
}

export default List;