import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Todo
        title="Typescript"
        description="Complete Typescript today"
        done={false}
      />
    </>
  );
}

export default App;
