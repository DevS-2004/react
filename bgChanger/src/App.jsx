import { useState } from 'react';
import './index.css'

function App() {
  let [color, setColor] = useState("#000000");

  return (
    <>
      <div className="w-full h-screen duration-200 flex items-center justify-center" 
        style={{ backgroundColor: color }}>

        {/* Button Container */}
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-4">
          <div className="flex gap-3 bg-white p-3 rounded-3xl shadow-lg">
            
            <button onClick={() => setColor("red")}
              className="px-4 py-2 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "red" }}>
              Red
            </button>

            <button onClick={() => setColor("#00FF7F")}
              className="px-4 py-2 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "#00FF7F" }}>
              Spring
            </button>

            <button onClick={() => setColor("#9932CC")}
              className="px-4 py-2 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "#9932CC" }}>
              Violet
            </button>

            <button onClick={() => setColor("yellow")}
              className="px-4 py-2 rounded-full text-black shadow-lg" 
              style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>

            <button onClick={() => setColor("aqua")}
              className="px-4 py-2 rounded-full text-black shadow-lg" 
              style={{ backgroundColor: "aqua" }}>
              Aqua
            </button>

            <button onClick={() => setColor("Orange")}
              className="px-4 py-2 rounded-full text-black shadow-lg" 
              style={{ backgroundColor: "#ff5733" }}>
              Orange
            </button>

            <button onClick={() => setColor("#FF69B4")}
              className="px-4 py-2 rounded-full text-black shadow-lg" 
              style={{ backgroundColor: "#FF69B4" }}>
              Pink
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
