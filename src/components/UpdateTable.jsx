import React, { useState } from "react";
import "./UpdateTable.css";


function UpdateTable({ className ,rows,input,setRows,setInput }) {
    // const [data, setData] = useState([])


  const handleAdd = () => {
    if (input.trim() !== "") {
      setRows([...rows, data]); // add new row
      setInput("");              // clear input
      // setData([])
    }
  };

  const handleDelete = () => {
    if (rows.length > 0) {
      setRows(rows.slice(0, -1)); // remove last row
    } else {
      console.log("limit reached");
    }
  };

  const handleReset = () => {
    setRows([]); // clear all rows
  };

/*   const handleData = (e) => {
    if (e.target.value.trim() !== ""){
        // console.log("success")
    // console.log("before",data)
    setData(data + e.target.value)
    console.log("after",data)
    } else {console.log ("failed")}
  } */
// console.log(rows, input)
  return (
    <div className={`${className} box`}>
      <input
        type="text"
        // value={input}
        // onChange={handleData}
        placeholder="Enter Time"
      />
    <input
        type="text"
        // value={input}
        // onChange={(e)=>setInput(e.target.value)}
        placeholder="Enter Course"
      />
      <br></br>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReset}>Reset</button>

      <table border="1" style={{ marginTop: "10px" }}>
        <tbody>
          
        </tbody>
      </table>
      <input type="text" placeholder="Enter A Promt"/>
    </div>
  );
}

export default UpdateTable;
