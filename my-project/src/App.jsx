import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div className='container border-black border-2'>
      <div className='h-1 mt-15 border-orange border-2'></div>
      <div className='h-48 mt-15 border-orange border-2'></div>
      <div className='h-48 mt-15 border-orange border-2'></div>

      {/* <h1 className='text-3xl font-bold bg-orange mt-12'>Tailwind CSS</h1>
      <div className="text-3xl font-bold underline">Hello world!</div> */}
    </div>
    </>
    
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
