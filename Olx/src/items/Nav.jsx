import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase'; 
import { doc, getDoc } from 'firebase/firestore';
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode); 

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        try {
          const userDoc = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userDoc);
          if (userSnap.exists()) {
            setUsername(userSnap.data().username);
          } else {
            console.log('No such user document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className={`px-6 py-1 shadow-md relative z-50 `}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <Link to="/">
          <img
            src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
            className="h-20"
            alt="Company Logo"
            // style={{ filter: isDarkMode ? 'invert(1)' : 'invert(1)' }}
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/myaccount"
            className={`py-3 px-4 text-md font-bold rounded-full border text-black bg-white`}
          >
            My Account
          </Link>
          <Link
            to="/post-add"
            className={`py-3 px-4 text-md font-bold rounded-full border ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}
          >
            Post Ads
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className={`py-3 px-4 text-md font-bold rounded-full border ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`py-3 px-4 text-md font-bold rounded-full border ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'}`}
            >
              Login
            </Link>
            
          )}
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-full right-0 w-48 mt-1 rounded-md shadow-lg ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-2 py-2">
            <li>
              <Link
                to="/myaccount"
                className="block text-center py-2 text-lg font-bold rounded-lg"
                onClick={closeMenu}
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/post-add"
                className="block text-center py-2 text-lg font-bold rounded-lg"
                onClick={closeMenu}
              >
                Post Ads
              </Link>
            </li>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block text-center py-2 text-lg font-bold rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block text-center py-2 text-lg font-bold rounded-lg"
                onClick={closeMenu}
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
