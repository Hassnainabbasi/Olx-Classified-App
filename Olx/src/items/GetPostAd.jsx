
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import {db} from '../firebase'
// export default function GetPostAd() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const postsCollection = collection(db, 'userAds');
//       const postSnapshot = await getDocs(postsCollection);
//       const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPosts(postList);
//     };

//     fetchPosts();
//   }, []);

//   return(
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//  {  
 
//    posts.map(ads => (
//  <div key={ads.id}>
//  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{ads.adTitle}</h2>

// <div className="mb-4">
//   <img
//     src={`${ads.photo}`}
//     alt="Post Image"
//     className="w-full rounded-lg shadow-md"
//   />
// </div>

// <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
//   <p className="text-gray-800 text-lg">
//    {ads.adModel}
//     </p>
// </div>

// <div className="flex justify-between items-center text-sm text-gray-600">
//   <div className="flex items-center space-x-2">
//     <span className="font-semibold">{ads.category}</span>
//   </div>
//   <span>{ads.adPrice}</span>
// </div>
//  </div>
//    ))

//  }
     
//     </div>
//   </div>
//   )

// }

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function GetPostAd() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'userAds');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postList);
    };

    fetchPosts();
  }, []);

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    //   <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {posts.map(ads => (
    //       <div key={ads.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    //         <img
    //           src={`${ads.photo}`}
    //           alt="Post Image"
    //           className="w-full h-48 object-cover"
    //         />
    //         <div className="p-4">
    //           <h2 className="text-xl font-semibold text-gray-800 mb-2">{ads.adTitle}</h2>
    //           <div className="bg-gray-100 p-2 rounded-lg mb-4">
    //             <p className="text-gray-800 text-lg">{ads.adModel}</p>
    //           </div>
    //           <div className="flex justify-between items-center text-sm text-gray-600">
    //             <span className="font-semibold">{ads.category}</span>
    //             <span className="text-lg font-bold text-gray-800">{ads.adPrice}</span>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(ads => (
        <div
          key={ads.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
        >
          <img
            src={`${ads.photo}`}
            alt="Post Image"
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{ads.adTitle}</h2>
            <div className="bg-gray-100 p-2 rounded-lg mb-4">
              <p className="text-gray-800 text-lg">{ads.adModel}</p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span className="font-semibold">{ads.category}</span>
              <span className="text-lg font-bold text-gray-800">{ads.adPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}