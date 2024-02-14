import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Employee = () => {
  // const [user,SetUser]=useState([{
  //   Name:'Sabari',Email:'sabarishv.22c',Age:20,
  // }])
  const [user, SetUser] = useState([])
  useEffect(() => {
    axios.get("https://cloudy-bracelet-boa.cyclic.app/employee")
      .then(result => SetUser(result.data))
      .catch(err => console.log(err))
  }, [])



  const handleDelete = (id) => {
    console.log(id);
    axios.delete('https://employease-oacsg1avl-sabarishs-projects-09ce967f.vercel.app/v1/deleteUser/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      }
      )
      .catch(err => console.log(err))
  }
  return (

    // <div className='d-flex bg-black justify-content-center align-items-center vh-100'>
    //   <div className='bg-white rounded p-3'>
    <div>
        <Link to='/dashboard/create' className='btn btn-success'>Add+</Link>
        {/* <div className='table'> */}
        <div className='table-responsive py-3 w-100'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.age}</td>
                      <td>

                        <Link to={`/dashboard/update/${item._id}`} className='btn btn-success'>Update</Link>

                        <button className='btn btn-danger' onClick={(e) => handleDelete(item._id)}>Delete</button></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          </div>
    </div>
  )
}

export default Employee
