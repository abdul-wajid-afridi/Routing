import React, { useState } from "react";

function UsestateChalenge2(props) {
  const [Name, setName] = useState("Name");
  const ToggleName = () => {
    Name === "Name" ? setName("Name changed") : setName("Name");
  };
  return (
    <div>
      <p>{Name}</p>
      <button onClick={ToggleName}>Toggle</button>
    </div>
  );
}

export default UsestateChalenge2;
