// // // // // import React, { useState } from 'react';
// // // // // import { Link } from 'react-router-dom';

// // // // // export default function Nav() {
// // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // //   const toggleMenu = () => {
// // // // //     setIsMenuOpen(!isMenuOpen);
// // // // //   };

// // // // //   return (
// // // // //     <nav className="bg-white dark:bg-gray-900 px-6 py-3 shadow-md relative">
// // // // //       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
// // // // //         <img
// // // // //           src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
// // // // //           className="h-20"
// // // // //           alt="Company Logo"
// // // // //         />

// // // // //         <div className="hidden md:flex space-x-6">
// // // // //           <Link
// // // // //             to="/myaccount"
// // // // //             className="py-2 px-4 text-lg text-black border border-gray-400 dark:text-gray-200 hover:bg-gray-100 font-bold dark:hover:bg-gray-700 rounded-lg"
// // // // //           >
// // // // //             My Account
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/post-add"
// // // // //             className="py-2 px-4 text-lg border border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-100 font-bold dark:hover:bg-gray-700 rounded-lg"
// // // // //           >
// // // // //             Post Ads
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/login"
// // // // //             className="py-2 px-4 text-lg text-gray-700 border border-gray-400 dark:text-gray-200 hover:bg-gray-100 font-bold dark:hover:bg-gray-700 rounded-lg"
// // // // //           >
// // // // //             Login
// // // // //           </Link>
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={toggleMenu}
// // // // //           type="button"
// // // // //           className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
// // // // //           aria-controls="navbar-default"
// // // // //           aria-expanded={isMenuOpen}
// // // // //         >
// // // // //           <span className="sr-only">Open main menu</span>
// // // // //           <svg
// // // // //             className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
// // // // //             xmlns="http://www.w3.org/2000/svg"
// // // // //             fill="none"
// // // // //             viewBox="0 0 24 24"
// // // // //             stroke="currentColor"
// // // // //           >
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// // // // //           </svg>
// // // // //         </button>
// // // // //       </div>

// // // // //       {isMenuOpen && (
// // // // //         <div className="absolute top-full left-[60%] transform -translate-x-[20%] w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 z-10 md:hidden">
// // // // //           <ul className="flex flex-col text-center space-y-2 py-2 ">
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/myaccount"
// // // // //                 className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
// // // // //               >
// // // // //                 My Account
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/post-add"
// // // // //                 className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
// // // // //               >
// // // // //                 Post Ads
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/login"
// // // // //                 className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
// // // // //               >
// // // // //                 Login
// // // // //               </Link>
// // // // //             </li>
// // // // //           </ul>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // import React, { useState } from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // export default function Nav() {
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // //   const toggleMenu = () => {
// // // //     setIsMenuOpen(!isMenuOpen);
// // // //   };

// // // //   return (
// // // //     <nav className="bg-white px-6 py-3 shadow-md relative">
// // // //       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
// // // //         {/* Company Logo */}
// // // //         <img
// // // //           src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
// // // //           className="h-20"
// // // //           alt="Company Logo"
// // // //         />

// // // //         {/* Desktop Links */}
// // // //         <div className="hidden md:flex space-x-6">
// // // //           <Link
// // // //             to="/myaccount"
// // // //             className="py-2 px-4 text-lg text-black border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// // // //           >
// // // //             My Account
// // // //           </Link>
// // // //           <Link
// // // //             to="/post-add"
// // // //             className="py-2 px-4 text-lg border border-gray-400 text-gray-700 hover:bg-gray-100 font-bold rounded-lg"
// // // //           >
// // // //             Post Ads
// // // //           </Link>
// // // //           <Link
// // // //             to="/login"
// // // //             className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// // // //           >
// // // //             Login
// // // //           </Link>
// // // //         </div>

// // // //         {/* Hamburger Menu Button */}
// // // //         <button
// // // //           onClick={toggleMenu}
// // // //           type="button"
// // // //           className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
// // // //           aria-controls="navbar-default"
// // // //           aria-expanded={isMenuOpen}
// // // //         >
// // // //           <span className="sr-only">Open main menu</span>
// // // //           <svg
// // // //             className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             fill="none"
// // // //             viewBox="0 0 24 24"
// // // //             stroke="currentColor"
// // // //           >
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// // // //           </svg>
// // // //         </button>
// // // //       </div>

// // // //       {/* Dropdown Menu */}
// // // //       {isMenuOpen && (
// // // //         <div className="absolute top-full left-[60%] transform -translate-x-[20%] w-48 bg-white shadow-lg rounded-md mt-2 z-10 md:hidden">
// // // //           <ul className="flex flex-col text-center space-y-2 py-2">
// // // //             <li>
// // // //               <Link
// // // //                 to="/myaccount"
// // // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // // //               >
// // // //                 My Account
// // // //               </Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link
// // // //                 to="/post-add"
// // // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // // //               >
// // // //                 Post Ads
// // // //               </Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link
// // // //                 to="/login"
// // // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // // //               >
// // // //                 Login
// // // //               </Link>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }
// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';

// // // export default function Nav() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const closeMenu = () => {
// // //     setIsMenuOpen(false);
// // //   };

// // //   return (
// // //     <nav className="bg-white px-6 py-3 shadow-md relative z-50">
// // //       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
// // //         {/* Company Logo */}
// // //         <img
// // //           src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
// // //           className="h-20"
// // //           alt="Company Logo"
// // //         />

// // //         {/* Desktop Links */}
// // //         <div className="hidden md:flex space-x-6">
// // //           <Link
// // //             to="/myaccount"
// // //             className="py-2 px-4 text-lg text-black border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// // //           >
// // //             My Account
// // //           </Link>
// // //           <Link
// // //             to="/post-add"
// // //             className="py-2 px-4 text-lg border border-gray-400 text-gray-700 hover:bg-gray-100 font-bold rounded-lg"
// // //           >
// // //             Post Ads
// // //           </Link>
// // //           <Link
// // //             to="/login"
// // //             className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// // //           >
// // //             Login
// // //           </Link>
// // //         </div>

// // //         {/* Hamburger Menu Button */}
// // //         <button
// // //           onClick={toggleMenu}
// // //           type="button"
// // //           className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
// // //           aria-controls="navbar-default"
// // //           aria-expanded={isMenuOpen}
// // //         >
// // //           <span className="sr-only">Open main menu</span>
// // //           <svg
// // //             className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //           >
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Dropdown Menu */}
// // //       {isMenuOpen && (
// // //         <div
// // //           className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 z-50"
// // //           onClick={(e) => e.stopPropagation()} // Stop propagation to avoid triggering parent events
// // //         >
// // //           <ul className="flex flex-col text-center space-y-2 py-2">
// // //             <li>
// // //               <Link
// // //                 to="/myaccount"
// // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // //                 onClick={closeMenu}
// // //               >
// // //                 My Account
// // //               </Link>
// // //             </li>
// // //             <li>
// // //               <Link
// // //                 to="/post-add"
// // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // //                 onClick={closeMenu}
// // //               >
// // //                 Post Ads
// // //               </Link>
// // //             </li>
// // //             <li>
// // //               <Link
// // //                 to="/login"
// // //                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
// // //                 onClick={closeMenu}
// // //               >
// // //                 Login
// // //               </Link>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Nav() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const closeMenu = () => {
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <nav className="bg-white px-6 py-3 shadow-md relative z-50">
// //       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
// //         {/* Company Logo */}
// //         <img
// //           src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
// //           className="h-20"
// //           alt="Company Logo"
// //         />

// //         {/* Desktop Links */}
// //         <div className="hidden md:flex space-x-6">
// //           <Link
// //             to="/myaccount"
// //             className="py-2 px-4 text-lg text-black border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// //           >
// //             My Account
// //           </Link>
// //           <Link
// //             to="/post-add"
// //             className="py-2 px-4 text-lg border border-gray-400 text-gray-700 hover:bg-gray-100 font-bold rounded-lg"
// //           >
// //             Post Ads
// //           </Link>
// //           <Link
// //             to="/login"
// //             className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// //           >
// //             Login
// //           </Link>
// //         </div>

// //         {/* Hamburger Menu Button */}
// //         <button
// //           onClick={toggleMenu}
// //           type="button"
// //           className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
// //           aria-controls="navbar-default"
// //           aria-expanded={isMenuOpen}
// //         >
// //           <span className="sr-only">Open main menu</span>
// //           <svg
// //             className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {isMenuOpen && (
// //         <div
// //           className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 mt-1 bg-white shadow-lg rounded-md md:hidden"
// //           onClick={(e) => e.stopPropagation()}
// //         >
// //           <ul className="flex flex-col space-y-2 py-2">
// //             <li>
// //               <Link
// //                 to="/myaccount"
// //                 className="block text-center py-2 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// //                 onClick={closeMenu}
// //               >
// //                 My Account
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/post-add"
// //                 className="block text-center py-2 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// //                 onClick={closeMenu}
// //               >
// //                 Post Ads
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/login"
// //                 className="block text-center py-2 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
// //                 onClick={closeMenu}
// //               >
// //                 Login
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white px-6 py-3 shadow-md relative z-50">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
//         <Link to={'/'}>
//         <img
//           src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
//           className="h-20"
//           alt="Company Logo"
//         />
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link
//             to="/myaccount"
//             className="py-2 px-4 text-lg text-black border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
//           >
//             My Account
//           </Link>
//           <Link
//             to="/post-add"
//             className="py-2 px-4 text-lg border border-gray-400 text-gray-700 hover:bg-gray-100 font-bold rounded-lg"
//           >
//             Post Ads
//           </Link>
//           <Link
//             to="/login"
//             className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
//           >
//             Login
//           </Link>
//         </div>

//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div
//           className="absolute top-full right-0 w-48 mt-1 bg-white shadow-lg rounded-md md:hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <ul className="flex flex-col space-y-2 py-2">
//             <li>
//               <Link
//                 to="/myaccount"
//                 className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
//                 onClick={closeMenu}
//               >
//                 My Account
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/post-add"
//                 className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
//                 onClick={closeMenu}
//               >
//                 Post Ads
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/login"
//                 className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
//                 onClick={closeMenu}
//               >
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Import the Firebase auth instance

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); 
      } else {
        setIsAuthenticated(false); 
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      setIsAuthenticated(false); 
    });
  };

  return (
    <nav className="bg-white px-6 py-3 shadow-md relative z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <Link to={'/'}>
          <img
            src="https://web-summit-avenger.imgix.net/production/logos/original/611593121fb2c6e11e1c9d807a9f1bdc38cf199a.jpg?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600"
            className="h-20"
            alt="Company Logo"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/myaccount"
            className="py-2 px-4 text-lg text-black border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
          >
            My Account
          </Link>
          <Link
            to="/post-add"
            className="py-2 px-4 text-lg border border-gray-400 text-gray-700 hover:bg-gray-100 font-bold rounded-lg"
          >
            Post Ads
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="py-2 px-4 text-lg text-gray-700 border border-gray-400 hover:bg-gray-100 font-bold rounded-lg"
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
          className="absolute top-full right-0 w-48 mt-1 bg-white shadow-lg rounded-md md:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-2 py-2">
            <li>
              <Link
                to="/myaccount"
                className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
                onClick={closeMenu}
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/post-add"
                className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
                onClick={closeMenu}
              >
                Post Ads
              </Link>
            </li>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
                onClick={closeMenu}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block text-center py-2 text-lg text-gray-700 border border-b-8 hover:bg-gray-100 font-bold rounded-lg"
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
