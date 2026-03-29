import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-sm rounded-sm overflow-hidden shadow-md">
        <img className="w-full" src="https://picsum.photos/600/400" />
      </div>
      <h1 className="text-6xl">Vite + React</h1>
    </>
  );
}

export default App;
