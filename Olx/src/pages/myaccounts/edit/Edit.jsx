import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const EditPost = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [post, setPost] = useState(null);
  const [adTitle, setAdTitle] = useState('');
  const [adPrice, setAdPrice] = useState('');
  const [adModel, setAdModel] = useState('');
  const [adYear, setAdYear] = useState('');
  const [category, setCategory] = useState('');

   useEffect(() => {
    const fetchPost = async () => {
      const postRef = doc(db, 'userAds', id);
      const docSnap = await getDoc(postRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPost(data);
        setAdTitle(data.adTitle);
        setAdPrice(data.adPrice);
        setAdModel(data.adModel);
        setAdYear(data.adYear);
        setCategory(data.category);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postRef = doc(db, 'userAds', id);
    await updateDoc(postRef, {
      adTitle,
      adPrice,
      adModel,
      adYear,
      category
    });

    navigate('/myaccount');
  };

  if (!post) {
    return <div className="flex justify-center items-center w-full h-full">
    <img
      className="w-20"
      src="https://i.gifer.com/ZZ5H.gif"
      alt="Loading animation"
    />
  </div>
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Your Post</h2>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <label htmlFor="adTitle" className="block">Ad Title</label>
          <input
            type="text"
            id="adTitle"
            value={adTitle}
            onChange={(e) => setAdTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="adPrice" className="block">Ad Price</label>
          <input
            type="text"
            id="adPrice"
            value={adPrice}
            onChange={(e) => setAdPrice(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="adModel" className="block">Ad Model</label>
          <input
            type="text"
            id="adModel"
            value={adModel}
            onChange={(e) => setAdModel(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="adYear" className="block">Ad Year</label>
          <input
            type="text"
            id="adYear"
            value={adYear}
            onChange={(e) => setAdYear(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="category" className="block">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
