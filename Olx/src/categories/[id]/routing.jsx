// export default function Routing(){
//     return(
//         <>
//         </>
//     )
// }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Sheets from '../../items/Sheet';

export default function Routing() {
  const { id } = useParams();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      const q = query(collection(db, 'userAds'), where('category', '==', id));
      const querySnapshot = await getDocs(q);
      const adsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center text-teal-600 mb-8">
        {id} Ads
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ads.length > 0 ? (
          ads.map(ad => (
            <div key={ad.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={ad.photo}
                alt={ad.adTitle}
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold">{ad.adTitle}</h2>
              <p className="text-gray-700">Price: ₹{ad.adPrice}</p>
              <p className="text-gray-500">Model: {ad.adModel}</p>
              <p className="text-gray-500">Year: {ad.adYear}</p>
              <Sheets />
            </div>
          ))
        ) : (
          <p>No Ads Found For This Category.</p>
        )}
      </div>
    </div>
  );
}
