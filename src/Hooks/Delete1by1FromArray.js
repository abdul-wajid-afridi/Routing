import React, { useState } from "react";
function App(props) {
  let User = [
    { id: 1, Name: "my name", Age: 11 },
    { id: 2, Name: "my name222", Age: 22 },
    { id: 3, Name: "my name33", Age: 33 },
  ];

  const [Name, SetName] = useState(User);
  const DeleteHandle = (event) => {
    const StoreData = Name.filter((it) => it.id !== event);
    SetName(StoreData);
  };
  return (
    <div>
      {Name.map((items) => (
        <div>
          <p key={items.id}>
            Name :{items.Name} Age : {items.Age}
          </p>
          <button onClick={() => DeleteHandle(items.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
