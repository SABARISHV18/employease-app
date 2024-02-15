// AttendanceForm.js (Component for marking attendance)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';
const Attendance = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const [user, SetUser] = useState([])
  useEffect(() => {
    axios.get("https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/employee")
      .then(result => SetUser(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleMarkAttendance = (e, employeeId) => {
    e.preventDefault();
    console.log(status);

    axios.post('https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/attendancee', {
      employeeId, // Include employeeName in the data
      status
    })
      .then(result => {
        console.log(result);
        console.log('hii');
        alert('successful');
      })
      .catch(err => console.error(err));
    // Handle errors and display appropriate messages
  };


  return (
    <div>
      <h2>Mark Attendance</h2>

      {/* <tbody>
      {
      <tr>
      user.map((item,index)=>{
                              return (
                              <tr key={index}>
                                <td>{item.name}</td>
        <tr/>
      }
        <td style={{ padding: '0 10px' }}>
          <label>Employee Name:</label>
        </td>
        <td  style={{ padding: '0 10px' }}>
          <input type="text" value={employeeId} className='w-100' onChange={(e) => setEmployeeId(e.target.value)} />
        </td>
        <td>
          <label>Status:</label>
        </td>
        <td>
          <select value={status} onChange={(e) => { console.log(e); setStatus(e.target.value); }}>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </td>
        <td>
        <button onClick={handleMarkAttendance}>Mark Attendance</button>
        </td>
        <td>
        <button onClick={back}>to see history</button>
        </td>
      </tr>
    </tbody> */}
      <table className='table-bordered w-100'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Mark</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item, index) => {
              return (
                <tr key={index}>
                  <td >{item.name}</td>
                  <td>
                    <select onChange={(e) => { console.log(e); setStatus(e.target.value); }}>
    
                      <option selected value="present" style={{backgroundColor:"green"}}>Present</option>
                      <option value="absent" style={{backgroundColor:"red"}}>Absent</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={(e) => handleMarkAttendance(e, item.name)}>Mark Attendance</button>
                  </td>
                  <td>
                    <Link to={`/dashboard/history/${item.name}`}>View History</Link>
                  </td>
                </tr>
              );
            })
          }
        </tbody>

      </table>
    </div>

  );
};

export default Attendance;
// AttendanceForm.js (Component for marking attendance)

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link} from 'react-router-dom';
// const Attendance = () => {
//   const [employeeId, setEmployeeId] = useState('');
//   const [status, setStatus] = useState('');
//   const navigate = useNavigate();
//   const [user, SetUser] = useState([])
//   useEffect(() => {
//     axios.get("http://localhost:3001/employee")
//       .then(result => SetUser(result.data))
//       .catch(err => console.log(err))
//   }, [])

//   const handleMarkAttendance = (e, employeeId) => {
//     e.preventDefault();
//     console.log(status);

//     axios.post('http://localhost:3001/attendance', {
//       employeeId, // Include employeeName in the data
//       status
//     })
//       .then(result => {
//         console.log(result);
//                 // You can add a success message or update the UI as needed
//       })
//       .catch(err => console.error(err));
//     // Handle errors and display appropriate messages
//   };


//   return (
//     <div>
//       <h2>Mark Attendance</h2>

//       {/* <tbody>
//       {
//       <tr>
//       user.map((item,index)=>{
//                               return (
//                               <tr key={index}>
//                                 <td>{item.name}</td>
//         <tr/>
//       }
//         <td style={{ padding: '0 10px' }}>
//           <label>Employee Name:</label>
//         </td>
//         <td  style={{ padding: '0 10px' }}>
//           <input type="text" value={employeeId} className='w-100' onChange={(e) => setEmployeeId(e.target.value)} />
//         </td>
//         <td>
//           <label>Status:</label>
//         </td>
//         <td>
//           <select value={status} onChange={(e) => { console.log(e); setStatus(e.target.value); }}>
//             <option value="present">Present</option>
//             <option value="absent">Absent</option>
//           </select>
//         </td>
//         <td>
//         <button onClick={handleMarkAttendance}>Mark Attendance</button>
//         </td>
//         <td>
//         <button onClick={back}>to see history</button>
//         </td>
//       </tr>
//     </tbody> */}
//       <table className='table-bordered w-100'>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Status</th>
//             <th>Mark</th>
//             <th>History</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             user.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td >{item.name}</td>
//                   <td>
//                     <select onClick={(e) => { console.log(e); setStatus(e.target.value); }}>
    
//                       <option value="present" style={{backgroundColor:"green"}}>Present</option>
//                       <option value="absent" style={{backgroundColor:"red"}}>Absent</option>
//                     </select>
//                   </td>
//                   <td>
//                     <button onClick={(e) => handleMarkAttendance(e, item.name)}>Mark Attendance</button>
//                   </td>
//                   <td>
//                     <Link to={`/history/${item._id}`}>View History</Link>
//                   </td>
//                 </tr>
//               );
//             })
//           }
//         </tbody>

//       </table>
//     </div>

//   );
// };

// export default Attendance;
