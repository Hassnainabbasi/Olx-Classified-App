// import React from 'react'

// export default function AddBanner() {
//   return (
//     <section 
//       className="relative w-full h-[70vh] bg-cover bg-center rounded-xl" 
//       style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532400-8e3dbd2e87b3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhZ2ludG9yZml0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&fm=jpg)' }}>
      
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div> 
//       <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
//         <div className="text-center">
//           <h2 className="text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg">Olx: The Largest Marketplace in Pakistan</h2>
//           <h3 className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg">A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It.</h3>
//         </div>
//       </div>
//     </section>
//   )
// }
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { MenuItem, Select } from '@mui/material';

// export default function AddBanner() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const banner = document.getElementById('banner');
//       if (banner) {
//         const rect = banner.getBoundingClientRect();
//         setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section
//       id="banner"
//       className="relative w-full h-[70vh] bg-cover bg-center rounded-xl overflow-hidden"
//       style={{
//         backgroundImage:
//           'url(https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-black-atmosphere-gym-advertising-background-backgroundgym-advertisingnational-fitnesssports-image_88211.jpg)',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

//       <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
//         <div className="text-center">
//           {/* Heading with animation */}
//           <motion.h2
//             className="text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             OLX The Largest Marketplace in Pakistan
//           </motion.h2>

//           <motion.h3
//             className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//           >
//             A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It.
//           </motion.h3>

//           <motion.div
//             className="bg-white rounded-full shadow-lg flex items-center p-2 w-full max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
//             transition={{ duration: 1.4, ease: 'easeOut' }}
//           >
//             <input
//               type="text"
//               placeholder="What are you searching for?"
//               className="flex-grow p-4 text-gray-500 rounded-full focus:outline-none"
//             />
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center text-gray-500 px-4 focus:outline-none"
//               >
//                 All Categories
//                 <i className="fas fa-chevron-down ml-2" />

//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//                   <Select
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     All Categories
//                   </Select>
//                   <MenuItem value="Electronics">Electronics</MenuItem>
//                   <MenuItem value="Fashion">Fashion</MenuItem>
//                   <MenuItem value="Real-estate">Real Estate</MenuItem>
//                   <MenuItem value="Vehicles">Vehicles</MenuItem>
//                   <MenuItem value="Furniture">Furniture</MenuItem>
//                   <MenuItem value="Mobile">Mobile</MenuItem>
//                   <MenuItem value="Animals">Animals</MenuItem>
//                   <MenuItem value="Home Appliances">Home Appliances</MenuItem>
               
//                 </div>
//               )}
//             </div>
//             <button className="bg-gray-800 text-white rounded-full px-6 py-2 ml-4 focus:outline-none">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuItem, Select, FormControl } from '@mui/material';

export default function AddBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById('banner');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section
      id="banner"
      className="relative w-full h-[70vh] bg-cover bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          'url(https://cdn.prod.website-files.com/62826010140593390f881c8b/656f0e72a03f9fd5dcc32b75_Our%20Favourite%20Virtual%20Stores.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

      <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
        <div className="text-center">
          {/* Heading with animation */}
          <motion.h2
            className="text-4xl md:text-6xl font-thin font-sans mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            OLX
          </motion.h2>

          {/* Subheading with animation */}
          <motion.h3
            className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It.
          </motion.h3>

          {/* Search Bar with animation */}
          <motion.div
            className="bg-white rounded-full shadow-lg flex items-center p-2 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          >
            <input
              type="text"
              placeholder="What are you searching for?"
              className="flex-grow p-4 text-gray-500 rounded-full focus:outline-none"
            />
            <FormControl 
             variant="standard"
             sx={{
               marginLeft: '16px',
               '& .MuiSelect-select': {
                 borderLeft: '2px solid gray',
                 paddingLeft: '16px',
               },
               '& .MuiSelect-icon': {
                 display: 'none',
               },
             }}
            className="mx-4" size="small">
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-white text-gray-700 rounded-lg"
                disableUnderline
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Vehicles">Vehicles</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
                <MenuItem value="Mobile">Mobile</MenuItem>
                <MenuItem value="Animals">Animals</MenuItem>
                <MenuItem value="Home Appliances">Home Appliances</MenuItem>
              </Select>
            </FormControl>
            <button className="bg-gray-800 text-white rounded-full px-6 py-2 focus:outline-none">
              Search
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { MenuItem, Select, FormControl } from '@mui/material';

// export default function AddBanner() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');
  

//   useEffect(() => {
//     const handleScroll = () => {
//       const banner = document.getElementById('banner');
//       if (banner) {
//         const rect = banner.getBoundingClientRect();
//         setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <section
//       id="banner"
//       className="relative w-full h-[70vh] bg-cover bg-center rounded-xl overflow-hidden bg-black"
//       style={{
//         backgroundImage:
//           'url(https://cdn.prod.website-files.com/62826010140593390f881c8b/656f0e72a03f9fd5dcc32b75_Our%20Favourite%20Virtual%20Stores.jpg)',
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

//       <div className="relative z-10 flex justify-center items-center bg-transparent w-full h-full text-white px-6 md:px-12">
//         <div className="text-center">
//           <motion.h2
//             className="text-4xl md:text-6xl font-thin font-sans mb-4 drop-shadow-lg"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             OLX 
//           </motion.h2>

//           <motion.h3
//             className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//           >
//             A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It.
//           </motion.h3>

//           <motion.div
//             className="bg-white rounded-full shadow-lg flex items-center p-2 w-full max-w-4xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
//             transition={{ duration: 1.4, ease: 'easeOut' }}
//           >
//             <input
//               type="text"
//               placeholder="What are you searching for?"
//               className="flex-grow p-4 text-gray-500 rounded-full focus:outline-none"
//             />
//             <FormControl
              // variant="standard"
              // sx={{
              //   marginLeft: '16px',
              //   '& .MuiSelect-select': {
              //     borderLeft: '2px solid gray',
              //     paddingLeft: '16px',
              //   },
              //   '& .MuiSelect-icon': {
              //     display: 'none',
              //   },
              // }}
//             >
//               <Select
//               sx={{color : '#949695'}}
//                 value={selectedCategory}
//                 onChange={handleCategoryChange}
                // disableUnderline
//               >
//                 <MenuItem
//                 value="All Categories">All Categories</MenuItem>
//                 <MenuItem value="Electronics">Electronics</MenuItem>
//                 <MenuItem value="Fashion">Fashion</MenuItem>
//                 <MenuItem value="Real Estate">Real Estate</MenuItem>
//                 <MenuItem value="Vehicles">Vehicles</MenuItem>
//                 <MenuItem value="Furniture">Furniture</MenuItem>
//                 <MenuItem value="Mobile">Mobile</MenuItem>
//                 <MenuItem value="Animals">Animals</MenuItem>
//                 <MenuItem value="Home Appliances">Home Appliances</MenuItem>
//               </Select>
//             </FormControl>
//             <button className="bg-gray-800 text-white rounded-full px-5 py-2 focus:outline-none">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
