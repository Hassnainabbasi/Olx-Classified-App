
import Slider from 'react-slick'; 
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, query ,where , getDoc } from 'firebase/firestore';
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

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <div className="text-center">
          <p className="text-lg text-gray-700">No posts available. Create a new post now!</p>
          <Link to="/post-add" className="text-blue-600 hover:text-blue-800 font-semibold text-md mt-4 inline-block">Create New Post</Link>
        </div>
      </div>
    );
  }

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
  <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
