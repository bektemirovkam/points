import React, { ChangeEvent, useState } from "react";
import { Button, Card, NavMenu, TextField } from "./components";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="app">
      <div className="container">
        <NavMenu />
      </div>
    </div>
  );
}

export default App;
