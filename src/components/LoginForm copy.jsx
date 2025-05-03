import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginForm.css'; // Your custom styles
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTabClick = (type) => {
    setIsLogin(type === 'login');
    setMessage('');
    setError('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const url = isLogin
        ? 'https://projectnewbackend1-1.onrender.com/api/auth/login'
        : 'https://projectnewbackend1-1.onrender.com/api/auth/register';

      const sendData = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const res = await axios.post(url, sendData);
      setMessage(res.data.message);

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate("/login/profile"); // Redirect after successful login
      }

      setFormData({
        firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: ''
      });
    } catch (err) {
      console.log('Error:', err);
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <div className="form-tabs">
          <button
            type="button"
            className={`tab-button ${isLogin ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            LOGIN
          </button>
          <button
            type="button"
            className={`tab-button ${!isLogin ? 'active' : ''}`}
            onClick={() => handleTabClick('register')}
          >
            REGISTER
          </button>
        </div>

        {message && <p className="success-msg">{message}</p>}
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
            </>
          )}

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(prev => !prev)} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {!isLogin && (
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span onClick={() => setShowConfirmPassword(prev => !prev)} className="eye-icon">
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
