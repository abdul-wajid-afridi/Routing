import React, { useState } from "react";

function UseState1(props) {
  const [Name, setName] = useState("my name");
  const ChangeName = () => {
    setName("Name changed");
  };
  return (
    <div>
      <p>{Name}</p>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  );
}

export default UseState1;
