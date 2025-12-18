import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';
import '../styles/auth.css';
// TODO: Icon component types and definitions
interface IconProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const IconSpan = ({ children, className = '', ariaLabel }: IconProps) => (
  <span role={ariaLabel ? 'img' : undefined} aria-label={ariaLabel} className={className}>
    {children}
  </span>
);

const BookOpen = (props: IconProps) => <IconSpan {...props}>📖</IconSpan>;
const Mail = (props: IconProps) => <IconSpan {...props}>✉️</IconSpan>;
const Lock = (props: IconProps) => <IconSpan {...props}>🔒</IconSpan>;
const User = (props: IconProps) => <IconSpan {...props}>👤</IconSpan>;

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // TODO: Form validation function
  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Valid email is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  // TODO: Sign-up API call handler
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.SIGN_UP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Sign up failed');
        return;
      }

      // TODO: Store auth token and redirect to dashboard
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Connection error. Please check your backend port in config/api.ts');
      console.error('SignUp error:', err);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* TODO: Header with logo and branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PlacementPrep
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Start your placement prep journey today</p>
        </div>

        {/* TODO: Sign-up form with validation */}
        <form onSubmit={handleSignUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-semibold">{error}</p>
            </div>
          )}

          {/* TODO: Full name input field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all">
              <User className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* TODO: Email input field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* TODO: Password input field with toggle visibility */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900"
                placeholder="At least 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-700 transition-all"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* TODO: Confirm password input field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* TODO: Submit button with loading state */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* TODO: Link to sign-in page */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signin')}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-all"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
