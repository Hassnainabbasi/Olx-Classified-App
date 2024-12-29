// // import { collection, getDocs } from 'firebase/firestore';
// // import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import { db } from '../firebase';

// // export default function CenterSection() {
// //     const [categories, setCategories] = useState([]);
  
// //     useEffect(() => {
// //       const fetchCategories = async () => {
// //         const categoriesCollection = collection(db, 'userAds');
// //         const postSnapshot = await getDocs(categoriesCollection);
// //         const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setCategories(postList);
// //         console.log(postList)
// //       };
  
// //       fetchCategories();
// //     }, []);
// //   return (
// //     <div className="container mx-auto py-8">
// //   <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
// //     Categories
// //   </h1>
// //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// //     {
// //        categories?.map((category=>(
// //         <Link to={`/categories/${category.category}`}>
// //         <div key={category.id} className="bg-white p-6 rounded-lg shadow-md text-center">
// //           <img
// //             alt="Mobile icon"
// //             className="mx-auto mb-4"
// //             height={100}
// //             src="https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg"
// //             width={100}
// //             />
// //           <p className="text-lg font-medium">{category.category}</p>
// //         </div>
// //         </Link>
// //        )))
// //       }
// //     {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Vehicle icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Vehicle</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Bike icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/lcJMu4YNRP49GVaIeJv1Neg8eubu2bLo1Xggb7OInhsWeexfE.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Bike</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Furniture icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Furniture</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Electronics icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Electronics</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Home Appliance icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Home Appliance</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Fashion icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Fashion</p>
// //     </div>
// //     <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //       <img
// //         alt="Animals icon"
// //         className="mx-auto mb-4"
// //         height={100}
// //         src="https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg"
// //         width={100}
// //       />
// //       <p className="text-lg font-medium">Animals</p>
// //     </div> */}
// //   </div>
// // </div>
// //   )
// // }
// import React from "react";
// import { Link } from "react-router-dom";

// const batayeehuyeeCategory = [
//   {
//     name: "Electronics",
//     image: "https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg",
//   },
//   {
//     name: "Furniture",
//     image: "https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg",
//   },
//   {
//     name: "Vehicles",
//     image: "https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg",
//   },
//   {
//     name: "Fashion",
//     image: "https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg",
//   },
//   {
//     name: "Home Appliances",
//     image: "https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg",
//   },
//   {
//     name: "Animals",
//     image: "https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg",
//   },
//   {
//     name : "Real-Estate",
//     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKRJLPNxEPowc2If4skVlBzdQDnM1UAxCyw&s"
//   },
//   {
//     name: "Mobiles",
//     image: "https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg",
//   },
// ];

// export default function CenterSection() {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
//         Categories
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {batayeehuyeeCategory.map((category, index) => (
//           <Link to={`/categories/${category.name}`} key={index}>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 src={category.image}
//                 alt={`${category.name} icon`}
//                 className="mx-auto mb-4"
//                 height={100}
//                 width={100}
//               />
//               <p className="text-lg font-medium">{category.name}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// // }
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const batayeehuyeeCategory = [
//   {
//     name: "Electronics",
//     image: "https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg",
//   },
//   {
//     name: "Furniture",
//     image: "https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg",
//   },
//   {
//     name: "Vehicles",
//     image: "https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg",
//   },
//   {
//     name: "Fashion",
//     image: "https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg",
//   },
//   {
//     name: "Home Appliances",
//     image: "https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg",
//   },
//   {
//     name: "Animals",
//     image: "https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg",
//   },
//   {
//     name: "Real-Estate",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKRJLPNxEPowc2If4skVlBzdQDnM1UAxCyw&s",
//   },
//   {
//     name: "Mobiles",
//     image: "https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg",
//   },
// ];

// export default function CenterSection() {
//   const [showAll, setShowAll] = useState(false); 

//   const handleSeeMore = () => {
//     setShowAll(true);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
//         Categories
//       </h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {batayeehuyeeCategory.slice(0, showAll ? batayeehuyeeCategory.length : 1).map((category, index) => (
//           <Link to={`/categories/${category.name}`} key={index}>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 src={category.image}
//                 alt={`${category.name} icon`}
//                 className="mx-auto mb-4"
//                 height={100}
//                 width={100}
//               />
//               <p className="text-lg font-medium">{category.name}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {!showAll && (
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={handleSeeMore}
//             className="bg-teal-600 text-white py-2 px-6 rounded-md"
//           >
//             See More Categories
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const batayeehuyeeCategory = [
  {
    name: "Electronics",
    image: "https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg",
  },
  {
    name: "Furniture",
    image: "https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg",
  },
  {
    name: "Vehicles",
    image: "https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg",
  },
  {
    name: "Fashion",
    image: "https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg",
  },
  {
    name: "Home Appliances",
    image: "https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg",
  },
  {
    name: "Animals",
    image: "https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg",
  },
  {
    name: "Real-Estate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKRJLPNxEPowc2If4skVlBzdQDnM1UAxCyw&s",
  },
  {
    name: "Mobiles",
    image: "https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg",
  },
];

export default function CenterSection() {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const isMobile = windowWidth < 768;
  const categoriesToShow = showAll || !isMobile ? batayeehuyeeCategory.length : 1;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
        Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {batayeehuyeeCategory.slice(0, categoriesToShow).map((category, index) => (
          <Link to={`/categories/${category.name}`} key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={category.image}
                alt={`${category.name} icon`}
                className="mx-auto mb-4"
                height={100}
                width={100}
              />
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {isMobile && !showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSeeMore}
            className="bg-teal-600 text-white py-2 px-6 rounded-md"
          >
            See More Categories
          </button>
        </div>
      )}
    </div>
  );
}
