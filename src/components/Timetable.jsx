/* import React, { useState } from 'react'
import './Timetable.css'

function addRow(){
    return 
}
function Timetable({className,rows}) {
    console.log("timetable:",rows)
  return (
    <div className={`${className} workspace`}>
    <nav className="table-div" >
        <table>
            <thead>
                <tr>
                    <th>Time/Day</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9:00</td>
                    <td>Maths</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>10:00</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                {rows.map((val, i) => (
                    <tr key={i}>
                    <td>{val}</td>
                    <td>{val}</td> 
                    </tr>
                 ))}
            </tbody>
        </table>
    </nav>
    </div>
  )
}

export default Timetable
 */

// version 2

// import React from "react";
// import "./Timetable.css";

// function Timetable() {
//   const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
//   const hours = ["9-10", "10-11", "11-12", "12-1", "1-2"];

//   return (
//     <div className="timetable workspace">
//       {/* Empty corner cell */}
//       <div className="cell header"></div>

//       {/* Day headers */}
//       {days.map((day, i) => (
//         <div key={i} className="cell header">{day}</div>
//       ))}

//       {/* Rows for each hour */}
//       {hours.map((hour, row) => (
//         <>
//           <div key={`h-${row}`} className="cell header">{hour}</div>
//           {days.map((day, col) => (
//             <div 
//               key={`${row}-${col}`} 
//               className="cell"
//               onClick={() => console.log(`Clicked ${day} ${hour}`)}
//             >
//               {/* Put subject/class here */}

//             </div>
//           ))}
//         </>
//       ))}
//     </div>
//   );
// }

// export default Timetable;
 

import React, { useState } from "react";
import "./Timetable.css";

function Timetable({className}) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9-10", "10-11", "11-12", "12-1", "1-2"];

  // state for cell data (2D array)
  const [cells, setCells] = useState(
    Array(hours.length).fill(null).map(() => Array(days.length).fill(""))
  );

  const handleCellClick = (row, col) => {
    const subject = prompt("Enter subject:");
    if (subject !== null) {
      const updated = [...cells];
      updated[row][col] = subject;
      setCells(updated);
    }
  };

  return (
    <div className={`timetable workspace ${className}`}>
      {/* Empty corner cell */}
      <div className="cell header"></div>

      {/* Day headers */}
      {days.map((day, i) => (
        <div key={i} className="cell header">{day}</div>
      ))}

      {/* Rows for each hour */}
      {hours.map((hour, row) => (
        <React.Fragment key={row}>
          <div className="cell header">{hour}</div>
          {days.map((day, col) => (
            <div 
              key={`${row}-${col}`} 
              className="cell"
              onClick={() => handleCellClick(row, col)}
            >
              {cells[row][col]}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Timetable;
