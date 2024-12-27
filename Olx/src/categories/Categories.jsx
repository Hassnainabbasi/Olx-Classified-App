import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function Categories() {
  const { categoryName } = useParams();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const adsCollection = collection(db, "userAds");
      const q = query(adsCollection, where("category", "==", categoryName));
      const querySnapshot = await getDocs(q);
      const adList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAds(adList);
    };

    fetchAds();
  }, [categoryName]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
        Ads in {categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{ad.title}</h2>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
