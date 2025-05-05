import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false); // Optional: For showing loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner or disable the button while request is in progress
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);

      // Show success message or toast here if you want
      alert(res.data.message);

      // Store the token received from the API in localStorage
      localStorage.setItem('token', res.data.token);

      // Optionally: Reset form data after successful login
      setFormData({
        email: '',
        password: ''
      });

      // Navigate to home page after login without needing a page refresh
      navigate('/'); // Redirect to home page or product listing page
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Login failed');
    } finally {
      setIsLoading(false); // Hide loading spinner once the request is complete
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        {/* Disable button while loading */}
        <button className="btn btn-primary w-100 mb-3" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="text-center">
        <small>
          Not registered? <Link to="/signup">Sign up here</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
