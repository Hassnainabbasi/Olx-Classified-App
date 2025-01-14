
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

  <div className="relative w-full h-screen flex justify-evenly items-center bg-gray-50">
  <div className="relative z-10 shadow-sm flex items-center w-full h-full max-w-md p-6">
    <div className=" p-10  rounded-lg w-full">
      <div className="flex justify-center mb-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" alt="Logo" className="h-12" /> {/* Replace with actual logo if needed */}
      </div>
      <h2 className="text-3xl font-sans font-semibold mb-4 text-center">Log in</h2>
      <p className="mb-4 text-center">Discover a better way with Olx</p>

      <button className="flex items-center justify-center w-full py-2 mb-4 bg-gray-100 rounded-lg">
        <img src="https://banner2.cleanpng.com/20180413/rfe/avfci721i.webp" alt="Google logo" width={25} className="mr-2" />
        <span className="text-gray-700">Log in with Google</span>
      </button>
      <div className="flex items-center justify-center mb-4">
        <hr className="w-full border-gray-300" />
        <span className="px-2 text-gray-500">Or</span>
        <hr className="w-full border-gray-300" />
      </div>
      <form>
        <div className="mb-5">
          <input
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <input
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-green-500" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-blue-500">Forget Password?</a>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 mb-4 text-white ${loading ? 'cursor-not-allowed' : ''} bg-gray-900 rounded-lg flex justify-center items-center`}
        >
          {loading ? (
            <div className="spinner-border text-white animate-spin w-6 h-6 border-4 border-t-transparent rounded-full"></div>
          ) : (
            'Login'
          )}
        </button>
        <div className="text-center">
          <span className="text-gray-700">Not a member yet? </span>
          <Link to={'/signup'} className="text-blue-500">Create an account</Link>
        </div>
      </form>
    </div>
  </div>
  <div className="hidden md:block h-[80vh] w-1/4 rounded-lg overflow-hidden">
    <img src="https://media.licdn.com/dms/image/D4D12AQG_ouCNoeut8Q/article-cover_image-shrink_720_1280/0/1679638788377?e=2147483647&v=beta&t=FmOcgD4kkGcHtM5xdEiGlgWyobjF4IWtUONNK3qRfxw" alt="E-commerce" className="w-full h-full object-cover" />
  </div>
</div>

  );
}
