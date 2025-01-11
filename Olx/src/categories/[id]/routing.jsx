import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Slider from 'react-slick'; // Make sure to import the Slider component

export default function Routing() {
  const { id } = useParams();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      const q = query(collection(db, 'userAds'), where('category', '==', id));
      const querySnapshot = await getDocs(q);
      const adsList = await Promise.all(
        querySnapshot.docs.map(async(docs) =>{
          const adData = { id: docs.id, ...docs.data() }
          console.log(adData)
          // console.log('Fetching user for UID:', adData.uid); // Log the UID
          // const userDocRef = doc(db, "users" , adData.uid)
          // const userSnapshot = await getDoc(userDocRef)
  
          let userData = null
          if (adData.uid) {
            console.log('Fetching user for UID:', adData.uid); // Log the UID
            const userDocRef = doc(db, "users", adData.uid);
            const userSnapshot = await getDoc(userDocRef);
  
            if (userSnapshot.exists()) {
              userData = userSnapshot.data();
              console.log(userData, "user data");
            } else {
              console.log("No user document available for UID", adData.uid);
            }
          }
          return {
            ...adData,
            userData
          };
        })
      )
     
      setAds(adsList);
      setLoading(false);
    };

    fetchAds();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <img
          className="w-20"
          src="https://i.gifer.com/ZZ5H.gif"
          alt="Loading animation"
        />
      </div>
    );
  }
  
  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
  <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {ads.map(ad => (
      <div key={ad.id} className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {Array.isArray(ad.photo) && ad.photo.length > 1 ? (
          <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
            {ad.photo.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Post Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
              </div>
            ))}
          </Slider>
        ) : (
          ad.photo && (
            <img src={Array.isArray(ad.photo) ? ad.photo[0] : ad.photo} alt="Post Image" className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110" />
          )
        )}

        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-500 uppercase">{ad.category}</span>
            <span className="text-xs font-semibold text-gray-400">{ad.createdAt?.toDate().toLocaleDateString()}</span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-gray-800">{ad.adTitle}</h2>
          <p className="text-sm text-gray-600 mt-2">{ad.adDescription}</p>
          
          <p className="text-lg text-gray-800 font-semibold mt-3">Price: <span className="text-green-600">{ad.adPrice}</span></p>

          <div className="flex items-center mt-4">
            {console.log(ad.userData, "ads")}
            <img className="w-10 h-10 rounded-full object-cover" src={ad.userData ? ad.userData.pic : ''} alt={ad.username} />

            <div className="ml-4">
              <p className="text-sm font-medium text-gray-700">{ad.userData ? ad.userData.username : 'Anonymous'}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  
  );
}
// <div className="container mx-auto py-8">
    //   <h1 className="text-3xl font-semibold text-center text-teal-600 mb-8">
    //     {id} Ads
    //   </h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //     {ads.length > 0 ? (
    //       ads.map(ad => (
    //         <div key={ad.id} className="bg-white p-6 rounded-lg shadow-md">
    //          {Array.isArray(ad.photo) && ad.photo.length > 1 ? (
    //             <Slider
    //               dots={true}
    //               infinite={true}
    //               speed={500}
    //               slidesToShow={1}
    //               slidesToScroll={1}
    //             >
    //               {ad.photo.map((image, index) => (
    //                 <div key={index}>
    //                   <img
    //                     src={image}
    //                     alt={`Ad Image ${index + 1}`}
    //                     className="w-full h-40 object-cover rounded-md"
    //                   />
    //                 </div>
    //               ))}
    //             </Slider>
    //           ) : (
    //             ad.photo && (
    //               <img
    //                 src={ad.photo}
    //                 alt={ad.adTitle}
    //                 className="mb-4 w-full h-40 object-cover rounded-md"
    //               />
    //             )
    //           )}

    //           <h2 className="text-xl font-semibold">{ad.adTitle}</h2>
    //           <p className="text-gray-700">Price: ₹{ad.adPrice}</p>
    //           <p className="text-gray-500">Model: {ad.adModel}</p>
    //           <p className="text-gray-500">Year: {ad.adYear}</p>
    //           {/* <Sheets /> */}
    //         </div>
    //       ))
    //     ) : (
    //       <p>No Ads Found For This Category.</p>
    //     )}
    //   </div>
    // </div>