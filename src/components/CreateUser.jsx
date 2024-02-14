import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const navigate=useNavigate();
   const Submit=(e)=>
   {
    e.preventDefault();
    axios.post("https://employease-oacsg1avl-sabarishs-projects-09ce967f.vercel.app/v1/create",{name,email,age: parseInt(age)})
    .then(result=>
        {
            console.log(result)
             navigate('/dashboard/employee')
        })
    .catch(err=>console.log(err))
   }
  return (
     <div className='row'>
    <div className='d-flex justify-content-center align-items-center vh-100 bg-black col-12'>
      <div className='w-75 w-sm-50 bg-white p-3 rounded me-4 mb-5'> 
             <form onSubmit={Submit}>
                <h2>Add user</h2>
                <div className='mb-2'>
                     <label htmlFor=''>NAME</label>
                     <input type='text' placeholder='enter name' className='form-control' onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                     <label htmlFor=''>EMAIL</label>
                     <input type='email' placeholder='enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                     <label htmlFor=''>AGE</label>
                     <input type='number' placeholder='enter age' className='form-control' onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Submit</button>

             </form>
      </div>
    </div>
    </div>
  )
}
export default CreateUser
