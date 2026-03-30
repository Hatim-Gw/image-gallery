import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-sm rounded-sm overflow-hidden shadow-md">
        <img className="w-full" src="https://picsum.photos/600/400" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by Hatim Ammar
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              4000
            </li>
            <li>
              <strong>Downloads: </strong>
              3000
            </li>
            <li>
              <strong>Likes: </strong>
              400
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
      <h1 className="text-6xl">Vite + React</h1>
    </>
  );
}

export default App;
