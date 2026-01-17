import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', formData);
      if (response.status === 200) {
        // Handle successful login (e.g., store token)
        alert('Login successful!');
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Left Side - Image */}
        <div className="relative hidden w-1/2 md:block">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
            alt="Shopping"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
            <div>
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="mt-2">Login to continue your shopping journey.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <div className="mx-auto w-full max-w-md">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Log in to Exclusive</h2>
            <p className="mb-6 text-gray-500">Enter your details below</p>

            {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="rounded-md bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
                  Log In
                </button>
                <Link to="#" className="text-red-500 hover:underline">Forget Password?</Link>
              </div>
            </form>

            <p className="mt-6 text-center text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-black underline hover:text-gray-800">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
