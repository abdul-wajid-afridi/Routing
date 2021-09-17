import React, { useState } from "react";

export const UseStateArray = () => {
  const Arr = [
    { id: 0, name: "my name", age: 23 },
    { id: 1, name: "his name", age: 33 },
    { id: 2, name: "your name", age: 43 },
  ];
  const DeleteArray = () => {
    setArrayData([""]);
  };
  const [ArrayData, setArrayData] = useState(Arr);
  return (
    <div>
      <div>
        {ArrayData.map((items) => (
          <div key={items.id}>
            <p>
              id :{items.id} Name : {items.name} Age :{items.age}
            </p>
          </div>
        ))}
        <button onClick={DeleteArray}>Delete</button>
      </div>
    </div>
  );
};
export default UseStateArray;
