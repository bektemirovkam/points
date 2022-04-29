import React, { ChangeEvent, useState } from "react";
import { Button, TextField } from "./components";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="app">
      <div className="container">
        <Button>Learn more</Button>
        <Button appearance="darkBlue" block>
          Learn more
        </Button>
        <Button appearance="green" block>
          Learn more
        </Button>
      </div>
      <div className="container">
        <TextField title="Email" value={value} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
