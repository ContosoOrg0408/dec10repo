import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

/**
 * Login component
 * Provides a form for user authentication with validation
 */
function Login() {
  const navigate = useNavigate();
  
  // State management for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  // State for form validation errors
  const [errors, setErrors] = useState({});
  
  // State for success message
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Validates email format
   * @param {string} email - Email address to validate
   * @returns {boolean} - True if valid, false otherwise
   */
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Validates the entire form
   * @returns {Object} - Object containing validation errors
   */
  const validateForm = () => {
    const newErrors = {};

    // Check if email is empty
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Check if password is empty
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  /**
   * Handles input field changes
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  /**
   * Handles form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid - simulate successful login
      setSuccessMessage('Login successful! Redirecting...');
      setErrors({});
      
      // In a real application, you would make an API call here
      console.log('Login attempt with:', formData);
      
      // Clear form after successful submission
      setTimeout(() => {
        setFormData({ email: '', password: '' });
        setSuccessMessage('');
      }, 2000);
    } else {
      // Form has errors
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Banking App</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>

        {/* Success message */}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email/Username field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign In
          </button>

          {/* Link to registration */}
          <div className="text-center">
            <p className="mb-0">
              Don't have an account?{' '}
              <Link to="/register" className="text-decoration-none">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
