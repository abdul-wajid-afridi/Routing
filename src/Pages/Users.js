import React from 'react';
import logoreact from "../assests/logoreact.png";
function Users(props) {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Users page</h1>
            <p>this is a users page</p>
            <img style={{borderRadius:25,margin:10}} src={logoreact}/>
            <br/>
            <img style={{borderRadius:25,margin:10}} src={logoreact}/>
            <img style={{borderRadius:25,margin:10}} src={logoreact}/>
            <img style={{borderRadius:25,margin:10}} src={logoreact}/>
            <img style={{borderRadius:25,margin:10,}} src={logoreact}/>
            <img src={logoreact} style={{height:200,width:200,opacity:.2}} className="myImage"/>
         
        </div>
    );
}

export default Users;