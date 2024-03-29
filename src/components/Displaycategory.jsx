import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Displaycategory = () => {
  const [user, SetUser] = useState([])
  const [count, SetcategoryCount] = useState(0)
  useEffect(() => {
    axios.get("https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/getcategory")
      .then(result => SetUser(result.data))
      .catch(err => console.log(err))
  }, []);
  const Delete = (id) => {
    console.log(id);
    axios.delete(`https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/deletecategory/${id}`)
      .then(res => {
        console.log(res)
        window.location.reload()
      }
      )
      .catch(err => console.log(err))
  }
  return (
    <div className='row'>
      <div className='d-flex bg-black justify-content-center align-items-center vh-100'>
        <div className='bg-white rounded p-3 col-8 col-sm-5'>
          <Link to='/dashboard/cat' className='btn btn-success'>Add projects</Link>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Projects</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td> <button className='btn btn-danger' onClick={(e) => Delete(item._id)}>Delete</button></td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Displaycategory;