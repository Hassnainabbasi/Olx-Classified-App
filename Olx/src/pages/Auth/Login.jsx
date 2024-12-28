
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
        showConfirmButton: true,
      });
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-80"
          src="https://www.shutterstock.com/image-illustration/background-registration-login-form-green-260nw-2406920449.jpg"
          height={1080}
          width={1920}
          alt="Background"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 rounded-full p-8">
              <i className="fas fa-user text-white text-4xl"></i>
            </div>
          </div>
          <h2 className="text-center text-3xl font-extrabold mb-8">Welcome Back</h2>
          <form>
            <div className="mb-5">
              <label className="block text-gray-800 font-semibold mb-2">
                <i className="fas fa-envelope mr-2"></i>
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-800 font-semibold mb-2">
                <i className="fas fa-lock mr-2"></i>
                Password
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className={`bg-blue-500 text-white rounded-full px-8 py-3 hover:bg-green-600 transition duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <div className="spinner-border text-white animate-spin w-6 h-6 border-4 border-t-transparent rounded-full"></div> // Add a spinner when loading
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <Link to={'/signup'} className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
