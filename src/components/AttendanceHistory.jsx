import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AttendanceHistory = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { employeeId } = useParams();

  useEffect(() => {
    axios
      .get(`https://cloudy-bracelet-boa.cyclic.app/history/${employeeId}`)
      .then((result) => {
        console.log(result);
        setAttendanceHistory(result.data || []);
      })
      .catch((error) => {
        console.error('Error fetching attendance history:', error);
        // Handle the error, e.g., set an error state or display a message to the user
      });
  }, [employeeId]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAttendanceHistory = attendanceHistory.filter((item) =>
    item.attendanceDate.includes(searchTerm)
  );

  return (
    <div>
      <h2>Attendance History</h2>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search by date...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className='table table-responsive border'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAttendanceHistory.length === 0 ? (
            <tr>
              <td colSpan='3'>No matching results</td>
            </tr>
          ) : (
            filteredAttendanceHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.attendanceDate}</td>
                <td>{item.employeeId}</td>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;
