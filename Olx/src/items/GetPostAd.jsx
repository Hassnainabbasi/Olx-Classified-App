import Slider from 'react-slick'; 
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';

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
    await deleteDoc(doc(db, 'userAds' ,userId))
    setPosts(posts.filter(ad => ad.id !== userId ))
   }
   catch (error) {
    console.error("Error deleting ad: ", error);
  }
 }
  }
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
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(ads => (
          <div
            key={ads.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
          >
            {Array.isArray(ads.photo) && ads.photo.length > 1 ? (
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {ads.photo.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Post Image ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              ads.photo && (
                <img
                  src={Array.isArray(ads.photo) ? ads.photo[0] : ads.photo}
                  alt="Post Image"
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              )
            )}

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{ads.adTitle}</h2>
              <div className="bg-gray-100 p-2 rounded-lg mb-4">
                <p className="text-gray-800 text-lg">{ads.adModel}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="font-semibold">{ads.category}</span>
                <span className="text-lg font-bold text-gray-800">{ads.adPrice}</span>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(ads.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ads.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
