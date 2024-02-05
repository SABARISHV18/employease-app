import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img1 from '../assets/m.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://cloudy-bracelet-boa.cyclic.app/register', { name, email, password })
    .then(result => {
      console.log(result);
      navigate('/login'); // Ensure this line is within the .then() block
    })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5 border shadow">
      <div className="row justify-content-md-center">
      <h2 className="text-center mb-4">Sign Up</h2>
        <div className='col-md-6 mb-5'>
            <img src={img1} alt="Logo" className="img-fluid"></img>
        </div>
        <div className="col-md-6">
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label mt-3">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='move mb-3'>Already have an account?<Link to="/login">Login</Link></div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
