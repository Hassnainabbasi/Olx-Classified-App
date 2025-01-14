
// import { getAuth } from "firebase/auth";
// import { collection, getDocs, query, where, doc, updateDoc, setDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../firebase";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// export default function AccountProfile() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [pic, setPic] = useState('');

//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         console.log(file, 'is here');
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append('upload_preset', 'olx-classified-post');
//         formData.append("cloud_name", 'djmfadch8');

//         const res = await fetch('https://api.cloudinary.com/v1_1/djmfadch8/image/upload', {
//             method: "POST",
//             body: formData,
//         });

//         if (!res.ok) {
//             const error = await res.json();
//             console.error('Error uploading image:', error);
//             setLoading(false);
//             return;
//         }

//         const uploadImgurl = await res.json();
//         console.log(uploadImgurl.url);

//         const user = getAuth().currentUser;
//         if (user) {
//             const userDocRef = doc(db, "users", user.uid);

//             const userSnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user.uid)));
//             const userData = userSnapshot.docs.map(doc => doc.data())[0];

//             if (userData?.pic) {
//                 await updateDoc(userDocRef, {
//                     pic: uploadImgurl.url, 
//                 });
//             } else {
//                 await setDoc(userDocRef, {
//                     pic: uploadImgurl.url, 
//                 }, { merge: true });
//             }
//             console.log("User pic updated successfully");

//             setPic(uploadImgurl.url);
//         }
//     };

//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const user = getAuth().currentUser;
//                 if (!user) {
//                     await Swal.fire({
//                         title: 'You are not logged in',
//                         icon: 'error',
//                         text: "Something went wrong!",
//                         footer: '<a href="/login">Login Account</a>',
//                     });
//                     setLoading(false);
//                     return;
//                 }

//                 const accountCollection = collection(db, 'users');
//                 const q = query(accountCollection, where("uid", "==", user.uid));
//                 const accountSnapshot = await getDocs(q);
//                 const docsData = accountSnapshot.docs.map(doc => doc.data());
//                 setData(docsData);
//                 console.log(docsData, 'data is');
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetch();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center w-full h-full">
//                 <img className="w-20" src="https://i.gifer.com/ZZ5H.gif" alt="Loading animation" />
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen flex">
//             <aside className="w-1/4 bg-gray-200 p-6">
//                 {data.length > 0 ? (
//                     <div className="flex flex-col items-center dark:bg-gray-800 p-6 rounded-lg shadow-sm">
//                         <img
//                             src={pic || data[0]?.pic || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
//                             alt="User profile"
//                             className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 dark:border-gray-700"
//                         />
//                         <label htmlFor="file-input" className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer transition duration-200">
//                             Change Image
//                         </label>
//                         <input
//                             id="file-input"
//                             type="file"
//                             onChange={handleImageChange}
//                             className="hidden"
//                         />
//                         <h2 className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">{data[0]?.username}</h2>
//                         <p className="text-gray-600 dark:text-gray-400">{data[0]?.email}</p>
//                     </div>
//                 ) : (
//                     <p className="text-gray-600">Loading user data...</p>
//                 )}
//                 <nav className="mt-8">
//                     <ul>
//                         <li className="mb-4 text-orange-500 font-semibold">Personal information</li>
//                         <li className="mb-4 text-gray-600">Billing & Payments</li>
//                         <li className="mb-4 text-gray-600">Order History</li>
//                         <Link to={'/getpost-ad'}>
//                             <li className="text-gray-600">See My Ads</li>
//                         </Link>
//                     </ul>
//                 </nav>
//             </aside>
//             <main className="flex-1 p-8">
//                 {data?.length > 0 ? (
//                     <>
//                         <div className="flex justify-between items-center mb-8">
//                             <h1 className="text-2xl font-bold">{data[0]?.username} Account</h1>
//                             <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign out</button>
//                         </div>
//                         <section>
//                             <h2 className="text-xl font-semibold mb-2">Personal information</h2>
//                             <p className="text-gray-600 mb-6">
//                                 Manage your personal information, including phone numbers and email address where you can be contacted
//                             </p>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="bg-white p-4 rounded shadow">
//                                     <h3 className="text-gray-600 mb-2">Name</h3>
//                                     <p className="text-lg font-semibold">{data[0]?.username}</p>
//                                 </div>
//                                 <div className="bg-white p-4 rounded shadow">
//                                     <h3 className="text-gray-600 mb-2">Registration Account</h3>
//                                     <p className="text-lg font-semibold">
//                                         {data[0]?.createAt ? new Date(data[0].createAt.seconds * 1000).toLocaleDateString() : "Date not available"}
//                                     </p>
//                                 </div>
//                                 <div className="bg-white p-4 rounded shadow">
//                                     <h3 className="text-gray-600 mb-2">Country Region</h3>
//                                     <p className="text-lg font-semibold">Pakistan, Muslim</p>
//                                 </div>
//                                 <div className="bg-white p-4 rounded shadow">
//                                     <h3 className="text-gray-600 mb-2">Language</h3>
//                                     <p className="text-lg font-semibold">English (UK) - English</p>
//                                 </div>
//                                 <div className="bg-white p-4 rounded shadow">
//                                     <h3 className="text-gray-600 mb-2">Contactable at</h3>
//                                     <p className="text-lg font-semibold">{data[0]?.email}</p>
//                                 </div>
//                             </div>
//                         </section>
//                     </>
//                 ) : (
//                     <div>Something Went Wrong</div>
//                 )}
//             </main>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, collection, query, where, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function AccountProfile() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pic, setPic] = useState('');

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append('upload_preset', 'olx-classified-post');
        formData.append("cloud_name", 'djmfadch8');

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/djmfadch8/image/upload', {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }

            const uploadImgurl = await res.json();
            const user = getAuth().currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userSnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user.uid)));
                const userData = userSnapshot.docs.map(doc => doc.data())[0];

                if (userData?.pic) {
                    await updateDoc(userDocRef, { pic: uploadImgurl.url });
                } else {
                    await setDoc(userDocRef, { pic: uploadImgurl.url }, { merge: true });
                }
                setPic(uploadImgurl.url);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = getAuth().currentUser;
                if (!user) {
                    Swal.fire({
                        title: 'You are not logged in',
                        icon: 'error',
                        text: "Please log in to view your profile.",
                        footer: '<a href="/login">Login Account</a>',
                    });
                    setLoading(false);
                    return;
                }

                const accountCollection = collection(db, 'users');
                const q = query(accountCollection, where("uid", "==", user.uid));
                const accountSnapshot = await getDocs(q);

                if (!accountSnapshot.empty) {
                    const docsData = accountSnapshot.docs.map(doc => doc.data());
                    setData(docsData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-full">
                <img className="w-20" src="https://i.gifer.com/ZZ5H.gif" alt="Loading animation" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <aside className="w-full md:w-1/4 bg-gray-200 p-6">
                {data.length > 0 ? (
                    <div className="flex flex-col items-center dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <img
                            src={pic || data[0]?.pic || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                            alt="User profile"
                            className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 dark:border-gray-700"
                        />
                        <label htmlFor="file-input" className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer transition duration-200">
                            Change Image
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <h2 className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">{data[0]?.username}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{data[0]?.email}</p>
                    </div>
                ) : (
                    <p className="text-gray-600">No account found.</p>
                )}
                <nav className="mt-8">
                    <ul>
                        <li className="mb-4 text-orange-500 font-semibold">Personal information</li>
                        <li className="mb-4 text-gray-600">Billing & Payments</li>
                        <li className="mb-4 text-gray-600">Order History</li>
                        <Link to={'/getpost-ad'}>
                            <li className="text-gray-600">See My Ads</li>
                        </Link>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6 md:p-8">
                {data.length > 0 ? (
                    <>
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <h1 className="text-2xl font-bold">{data[0]?.username} Account</h1>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 md:mt-0">Sign out</button>
                        </div>
                        <section>
                            <h2 className="text-xl font-semibold mb-2">Personal information</h2>
                            <p className="text-gray-600 mb-6">
                                Manage your personal information, including phone numbers and email address where you can be contacted
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-gray-600 mb-2">Name</h3>
                                    <p className="text-lg font-semibold">{data[0]?.username}</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-gray-600 mb-2">Registration Account</h3>
                                    <p className="text-lg font-semibold">
                                        {data[0]?.createAt ? new Date(data[0].createAt.seconds * 1000).toLocaleDateString() : "Date not available"}
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-gray-600 mb-2">Country Region</h3>
                                    <p className="text-lg font-semibold">Pakistan, Muslim</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-gray-600 mb-2">Language</h3>
                                    <p className="text-lg font-semibold">English (UK) - English</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-gray-600 mb-2">Contactable at</h3>
                                    <p className="text-lg font-semibold">{data[0]?.email}</p>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <div>No account found.</div>
                )}
            </main>
        </div>
    );
}
