import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
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
            const response = await axios.post('http://localhost:8000/api/auth/register', formData);
            if (response.status === 201) {
                navigate('/');
                alert('Registration successful!'); 
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">

                <div className="relative hidden w-1/2 md:block">
                    <img
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
                        alt="Shopping"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                        <div>
                            <h2 className="text-3xl font-bold">Start your journey</h2>
                            <p className="mt-2">Join our community and experience the best shopping.</p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                    <div className="mx-auto w-full max-w-md">
                        <h2 className="mb-2 text-3xl font-bold text-gray-900">Create an account</h2>
                        <p className="mb-6 text-gray-500">Enter your details below</p>

                        {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
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

                            <button
                                type="submit"
                                className="w-full rounded-md bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
                            >
                                Create Account
                            </button>

                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-3 font-medium transition hover:bg-gray-50"
                            >
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                                Sign up with Google
                            </button>
                        </form>

                        <p className="mt-6 text-center text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-black underline hover:text-gray-800">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
