import { useEffect, useState } from "react";

export default function App() {
  const[todos, setTodos] = useState("");
  
  useEffect(() => {
    const getTodos = async() => {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);
    };

    getTodos();
  }, [])



  return (
    <main className="container">
      <h1>ToDo App</h1>
      <div>
      {(todos.length > 0) && <pre>{JSON.stringify(todos, null, 2)}</pre>}
      </div>
    </main>
  );
}