// import Slider from 'react-slick'; 
// import React, { useEffect, useState } from 'react';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import { query, where } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import Swal from 'sweetalert2';
// import { Link, useParams } from 'react-router-dom';

// export default function GetPostAd() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleDelete = async(userId) =>{
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "This action cannot be undone.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel',
//       reverseButtons: true,
//       });

//       if (result.isConfirmed) {
//     try{
//     await deleteDoc(doc(db, 'userAds' ,userId))
//     setPosts(posts.filter(ad => ad.id !== userId ))
//    }
//    catch (error) {
//     console.error("Error deleting ad: ", error);
//   }
//  }
//   }
//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const user = getAuth().currentUser;
//       if (!user) {
//         setLoading(false);
//         return;
//       }
//       const postsCollection = collection(db, 'userAds');
//       const q = query(postsCollection, where("uid", "==", user.uid)); 
//       const postSnapshot = await getDocs(q);
//       const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPosts(postList);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center w-full h-full">
//         <img className="w-20" src="https://i.gifer.com/ZZ5H.gif" alt="Loading animation" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map(ads => (
//           <div
//             key={ads.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
//           >
//             {Array.isArray(ads.photo) && ads.photo.length > 1 ? (
//               <Slider
//                 dots={true}
//                 infinite={true}
//                 speed={500}
//                 slidesToShow={1}
//                 slidesToScroll={1}
//               >
//                 {ads.photo.map((image, index) => (
//                   <div key={index}>
//                     <img
//                       src={image}
//                       alt={`Post Image ${index + 1}`}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               ads.photo && (
//                 <img
//                   src={Array.isArray(ads.photo) ? ads.photo[0] : ads.photo}
//                   alt="Post Image"
//                   className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
//                 />
//               )
//             )}

//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{ads.adTitle}</h2>
//               <div className="bg-gray-100 p-2 rounded-lg mb-4">
//                 <p className="text-gray-800 text-lg">{ads.adModel}</p>
//               </div>
//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <span className="font-semibold">{ads.category}</span>
//                 <span className="text-lg font-bold text-gray-800">{ads.adPrice}</span>
//               </div>
//               <div className="flex justify-between mt-4">
//               <Link
//     to={`/edit/${ads.id}`}  // This will redirect to the EditPost component
//     className="text-blue-600 hover:text-blue-800"
//   >
//     Edit
//   </Link>
//                 <button
//                   onClick={() => handleDelete(ads.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// // }
// import Slider from 'react-slick'; 
// import React, { useEffect, useState } from 'react';
// import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import { query, where } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import Swal from 'sweetalert2';
// import { Link, useParams } from 'react-router-dom';

// export default function GetPostAd() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleDelete = async(userId) =>{
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "This action cannot be undone.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel',
//       reverseButtons: true,
//       });

//       if (result.isConfirmed) {
//     try{
//     await deleteDoc(doc(db, 'userAds' ,userId))
//     setPosts(posts.filter(ad => ad.id !== userId ))
//    }
//    catch (error) {
//     console.error("Error deleting ad: ", error);
//   }
//  }
//   }
//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const user = getAuth().currentUser;
//       if (!user) {
//         setLoading(false);
//         return;
//       }
//       const postsCollection = collection(db, 'userAds');
//       const q = query(postsCollection, where("uid", "==", user.uid)); 
//       const postSnapshot = await getDocs(q);
//       const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPosts(postList);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center w-full h-full">
//         <img className="w-20" src="https://i.gifer.com/ZZ5H.gif" alt="Loading animation" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map(ads => (
//           <div
//             key={ads.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
//           >
//             {Array.isArray(ads.photo) && ads.photo.length > 1 ? (
//               <Slider
//                 dots={true}
//                 infinite={true}
//                 speed={500}
//                 slidesToShow={1}
//                 slidesToScroll={1}
//               >
//                 {ads.photo.map((image, index) => (
//                   <div key={index}>
//                     <img
//                       src={image}
//                       alt={`Post Image ${index + 1}`}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             ) : (
//               ads.photo && (
//                 <img
//                   src={Array.isArray(ads.photo) ? ads.photo[0] : ads.photo}
//                   alt="Post Image"
//                   className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
//                 />
//               )
//             )}

//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{ads.adTitle}</h2>
//               <div className="bg-gray-100 p-2 rounded-lg mb-4">
//                 <p className="text-gray-800 text-lg">{ads.adModel}</p>
//               </div>
//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <span className="font-semibold">{ads.category}</span>
//                 <span className="text-lg font-bold text-gray-800">{ads.adPrice}</span>
//               </div>
//               <div className="flex justify-between mt-4">
//               <Link
//     to={`/edit/${ads.id}`}  // This will redirect to the EditPost component
//     className="text-blue-600 hover:text-blue-800"
//   >
//     Edit
//   </Link>
//                 <button
//                   onClick={() => handleDelete(ads.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Slider from 'react-slick'; 
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, query ,where , getDoc, Query } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function GetPostAd() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async(userId) =>{
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try{
        await deleteDoc(doc(db, 'userAds', userId));
        setPosts(posts.filter(ad => ad.id !== userId));
      } catch (error) {
        console.error("Error deleting ad: ", error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const user = getAuth().currentUser;
      if (!user) {
        setLoading(false);
        return;
      }
      const postsCollection = collection(db, 'userAds');
      const q = query(postsCollection, where("uid", "==", user.uid)); 
      const postSnapshot = await getDocs(q);
      const postList = await Promise.all(
        postSnapshot.docs.map(async (doces) => {
          const adData = {
            id: doces.id,
            ...doces.data()
          };
      
          console.log(adData);
          console.log('Fetching user for UID:', adData.uid); // Log the UID

      
          const userDocRef = doc(db, 'users', adData.uid);
          const userSnapshot = await getDoc(userDocRef); // You need to await this
                 
          let userData = null;
          if (userSnapshot.exists()) {
            userData = userSnapshot.data();
            console.log(userData, "user data");
          } else {
            console.log("No such user document!",adData.id);
          }
      
          return {
            ...adData,
            userData
          };
          
        })
      );
      
      
      setPosts(postList);
      setLoading(false);
  
  };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <img className="w-20" src="https://i.gifer.com/ZZ5H.gif" alt="Loading animation" />
      </div>
    );
  }

  return (
    
<div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
  <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {posts.map(ads => (
      <div key={ads.id} className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {Array.isArray(ads.photo) && ads.photo.length > 1 ? (
          <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
            {ads.photo.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Post Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
              </div>
            ))}
          </Slider>
        ) : (
          ads.photo && (
            <img src={Array.isArray(ads.photo) ? ads.photo[0] : ads.photo} alt="Post Image" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110" />
          )
        )}

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-500 uppercase">{ads.category}</span>
            <span className="text-xs font-semibold text-gray-400">{ads.createdAt?.toDate().toLocaleDateString()}</span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-gray-800">{ads.adTitle}</h2>
          <p className="text-sm text-gray-600 mt-2">{ads.adDescription}</p>
          
          <p className="text-lg text-gray-800 font-semibold mt-3">Price: <span className="text-green-600">{ads.adPrice}</span></p>

          <div className="flex items-center mt-4">
            {console.log(ads.userData, "Adss")}
            <img className="w-10 h-10 rounded-full object-cover" src={ads.userData ? ads.userData.pic : ''} alt={ads.username} />

            <div className="ml-4">
              <p className="text-sm font-medium text-gray-700">{ads.userData ? ads.userData.username : 'Anonymous'}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Link to={`/edit/${ads.id}`} className="text-blue-600 hover:text-blue-800 font-semibold text-md">Edit</Link>
            <button onClick={() => handleDelete(ads.id)} className="text-red-600 hover:text-red-800 font-semibold text-md">Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  
);
}

// <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    //   <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        // {posts.map(ads => (
        //   <div
        //     key={ads.id}
        //     className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
        //   >
        //     {Array.isArray(ads.photo) && ads.photo.length > 1 ? (
        //       <Slider
        //         dots={true}
        //         infinite={true}
        //         speed={500}
        //         slidesToShow={1}
        //         slidesToScroll={1}
        //       >
        //         {ads.photo.map((image, index) => (
        //           <div key={index}>
        //             <img
        //               src={image}
        //               alt={`Post Image ${index + 1}`}
        //               className="w-full h-48 object-cover"
        //             />
        //           </div>
        //         ))}
        //       </Slider>
        //     ) : (
        //       ads.photo && (
        //         <img
        //           src={Array.isArray(ads.photo) ? ads.photo[0] : ads.photo}
        //           alt="Post Image"
        //           className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        //         />
        //       )
        //     )}

    //         <div className="p-4">
    //           <span className="text-xs font-semibold text-blue-500 uppercase">{ads.category}</span>
    //           <h2 className="mt-2 text-lg font-semibold text-gray-800">{ads.adTitle}</h2>
    //           <div className="flex items-center mt-4">
    //             <div className="ml-3">
    //               <p className="text-sm font-medium text-gray-600">{ads.adModel}</p>
    //               <p className="text-sm text-gray-500">{ads.adPrice}</p>
    //             </div>
    //           </div>
    //           <div className="flex justify-between mt-4">
    //             <Link
    //               to={`/edit/${ads.id}`}
    //               className="text-blue-600 hover:text-blue-800"
    //             >
    //               Edit
    //             </Link>
    //             <button
    //               onClick={() => handleDelete(ads.id)}
    //               className="text-red-600 hover:text-red-800"
    //             >
    //               Delete
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>