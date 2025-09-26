import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Timetable from './components/Timetable'
import UpdateTable from './components/UpdateTable'
function App() {
  const [rows, setRows] = useState([]);   // stores all rows
  const [input, setInput] = useState(""); // stores current input

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Timetable className="side" rows={rows} />
        <UpdateTable className="side" rows={rows} setRows={setRows} input={input} setInput={setInput} />
      </div>
    </>
  )
}

export default App
