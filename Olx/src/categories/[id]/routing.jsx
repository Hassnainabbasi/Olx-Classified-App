import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
        querySnapshot.docs.map(async (docs) => {
          const adData = { id: docs.id, ...docs.data() };
          console.log(adData);

          let userData = null;
          if (adData.uid) {
            console.log('Fetching user for UID:', adData.uid);
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
      );

      setAds(adsList);
      setLoading(false);
    };

    fetchAds();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <Skeleton height={192} />
          <div className="p-6">
            <Skeleton height={20} width={120} />
            <Skeleton height={15} className="mt-3" />
            <Skeleton height={25} width={2000} className="mt-3" />
            <div className="flex items-center mt-4">
              <Skeleton circle={true} height={40} width={40} />
              <div className="ml-4">
                <Skeleton height={20} width={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                <img className="w-10 h-10 rounded-full object-cover" src={ad.userData ? ad.userData.pic : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='} alt={ad.username} />

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
