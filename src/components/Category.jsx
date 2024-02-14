import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const send = (e) => {
    e.preventDefault();
    console.log(name);
    axios
      .post("https://employease-oacsg1avl-sabarishs-projects-09ce967f.vercel.app/v1/add", { name })
      .then((result) => {
        console.log(result);
       
          navigate('/dashboard/category')
        
        // Optionally, you can navigate to another page after successful submission
        // navigate('/some-other-route');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={send}>
        <label>Add the wanted category</label>
        <input
          type='text'
          placeholder='enter name'
          className='form-control w-75 mt-3'
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='btn btn-success mt-3'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Category;
