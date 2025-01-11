import React from 'react'
import { motion } from 'framer-motion'

export default function SecondCenterSection() {
  return (
    <div className="mx-auto">
      <motion.div
        className="flex justify-center items-center bg-gradient-to-r rounded-xl mx-auto container mt-24 mb-10 w-3/4 h-40 border-5 border-white shadow-xl relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Image with responsive styling */}
        <img
          src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg" // A better resolution image
          alt="Exclusive Offer"
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Text content over image */}
        <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl">
  <span style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.7)' }}>
    Exclusive Offer - 50% Off!
  </span>
</div>

      </motion.div>
    </div>
  )
}
