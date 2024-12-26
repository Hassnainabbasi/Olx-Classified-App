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

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

export default function AddBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById('banner');
      const rect = banner.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="banner"
      className="relative w-full h-[70vh] bg-cover bg-center rounded-xl overflow-hidden"
      style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-black-atmosphere-gym-advertising-background-backgroundgym-advertisingnational-fitnesssports-image_88211.jpg)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div> 

      <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
        <div className="text-center">
          {/* Heading with animation */}
          <motion.h2 
            className="text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Olx: The Largest Marketplace in Pakistan
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

          {/* Call-to-action button with hover effect */}
          <motion.button 
            className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
