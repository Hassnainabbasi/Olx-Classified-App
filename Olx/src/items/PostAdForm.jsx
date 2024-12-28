// import React, { useState } from 'react';
// import { Button, MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment } from '@mui/material';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import Swal from 'sweetalert2';
// export default function PostAdForm() {
//   const [adTitle, setAdTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [adPrice, setAdPrice] = useState('');
//   const [adModel, setAdModel] = useState('');
//   const [adYear, setAdYear] = useState('');
//   const [adDescription, setAdDescription] = useState('');
//   const [photo, setPhoto] = useState(null);

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log({
//       adTitle,
//       category,
//       adPrice,
//       adModel,
//       adYear,
//       adDescription,
//       photo
//     });
//     if(!photo) return
    
//     const data = new FormData()
//     data.append("file",photo)
    
//     data.append('upload_preset','olx-classified-post')
//     data.append("cloud_name" , 'djmfadch8')
    
//     const res = await fetch('https://api.cloudinary.com/v1_1/djmfadch8/image/upload', {
//       method: "POST",
//       body: data
//     });
    
//     if (!res.ok) {
//       const error = await res.json();
//       console.error('Error uploading image:', error);
//       return; 
//     }
    
//     const uploadImgurl = await res.json();
//     console.log(uploadImgurl);

//     const adData = {
//       adTitle,
//       category,
//       adPrice,
//       adModel,
//       adYear,
//       adDescription,
//       photo: uploadImgurl.url,
//       createdAt: new Date(),
//     };
//     const documentId = `${adTitle}-${adModel}-${adYear}`

//     try{
//       await setDoc(doc(db , "userAds", documentId),adData)
//       .then(()=>{
//         const Toast = Swal.mixin({
//           toast: true,
//           position: "top-end",
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.onmouseenter = Swal.stopTimer;
//             toast.onmouseleave = Swal.resumeTimer;
//           }
//         });
//         Toast.fire({
//           icon: "success",
//           title: "Create Post Successfully"
//         });
//       })
//     }
//     catch(e){
//       console.log(e)
//     }

//   };

//   return (
   
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Post Your Ad</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <TextField
//               label="Ad Title *"
//               variant="outlined"
//               fullWidth
//               required
//               value={adTitle}
//               onChange={(e) => setAdTitle(e.target.value)}
//               placeholder="Enter Ad Title"
//             />
//           </div>

//           <div className="mb-6">
//             <FormControl fullWidth variant="outlined" required>
//               <InputLabel>Category *</InputLabel>
//               <Select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 label="Category *"
//               >
//                 <MenuItem value="">-- Select Category --</MenuItem>
//                 <MenuItem value="Electronics">Electronics</MenuItem>
//                 <MenuItem value="Fashion">Fashion</MenuItem>
//                 <MenuItem value="Real-estate">Real Estate</MenuItem>
//                 <MenuItem value="Furniture">Furniture</MenuItem>
//                 <MenuItem value="Mobile">Mobile</MenuItem>
//                 <MenuItem value="Animals">Animals</MenuItem>
//                 <MenuItem value="Home Appilances">Home Appilances</MenuItem>
//                 <MenuItem value="Vehicles">Vehicles</MenuItem>

//               </Select>
//             </FormControl>
//           </div>

//           <div className="mb-6">
//             <TextField
//               label="Ad Price *"
//               variant="outlined"
//               fullWidth
//               required
//               value={adPrice}
//               onChange={(e) => setAdPrice(e.target.value)}
//               placeholder="Enter Ad Price"
//               InputProps={{
//                 startAdornment: <InputAdornment position="start">₹</InputAdornment>,
//               }}
//             />
//           </div>

//           <div className="mb-6">
//             <TextField
//               label="Ad Model *"
//               variant="outlined"
//               fullWidth
//               required
//               value={adModel}
//               onChange={(e) => setAdModel(e.target.value)}
//               placeholder="Enter Ad Model"
//             />
//           </div>

//           <div className="mb-6">
//             <TextField
//               label="Ad Year *"
//               variant="outlined"
//               fullWidth
//               required
//               value={adYear}
//               onChange={(e) => setAdYear(e.target.value)}
//               placeholder="Enter Ad Year"
//               type="number"
//             />
//           </div>

//           <div className="mb-6">
//             <div className="flex items-center gap-5">
//               <Button
//                 variant="contained"
//                 component="label"
//                 color="primary"
//                 className="mr-4"
//               >
//                 Upload Photo
//                 <input
//                   type="file"
//                   hidden
//                   accept="image/*"
//                   onChange={(e) => setPhoto(e.target.files[0])}
//                 />
//               </Button>
//               <span>{photo ? photo.name : '   No file chosen'}</span>
//             </div>
//           </div>

//           <div className="mb-6">
//             <TextField
//               label="Ad Description *"
//               variant="outlined"
//               fullWidth
//               required
//               multiline
//               rows={4}
//               value={adDescription}
//               onChange={(e) => setAdDescription(e.target.value)}
//               placeholder="Include Brands, Model, Age and Included Accessories"
//             />
//           </div>

//           <div className="text-center">
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               size="large"
//               className="w-full py-3"
//             >
//               Submit
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
   
// );
// }
import React, { useState } from 'react';
import { Button, MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, CircularProgress } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2';

export default function PostAdForm() {
  const [adTitle, setAdTitle] = useState('');
  const [category, setCategory] = useState('');
  const [adPrice, setAdPrice] = useState('');
  const [adModel, setAdModel] = useState('');
  const [adYear, setAdYear] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    console.log({
      adTitle,
      category,
      adPrice,
      adModel,
      adYear,
      adDescription,
      photo
    });

    if (!photo) return;

    const data = new FormData();
    data.append("file", photo);
    data.append('upload_preset', 'olx-classified-post');
    data.append("cloud_name", 'djmfadch8');

    const res = await fetch('https://api.cloudinary.com/v1_1/djmfadch8/image/upload', {
      method: "POST",
      body: data
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Error uploading image:', error);
      setLoading(false); // Stop loader
      return;
    }

    const uploadImgurl = await res.json();
    console.log(uploadImgurl);

    const adData = {
      adTitle,
      category,
      adPrice,
      adModel,
      adYear,
      adDescription,
      photo: uploadImgurl.url,
      createdAt: new Date(),
    };

    const documentId = `${adTitle}-${adModel}-${adYear}`;

    try {
      await setDoc(doc(db, "userAds", documentId), adData);
      setLoading(false); // Stop loader
      setAdTitle('');
      setCategory('');
      setAdPrice('');
      setAdModel('');
      setAdYear('');
      setAdDescription('');
      setPhoto(null);

      // Show success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post Created Successfully",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (e) {
      setLoading(false); // Stop loader
      console.log(e);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error Creating Post",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Post Your Ad</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <TextField
              label="Ad Title *"
              variant="outlined"
              fullWidth
              required
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              placeholder="Enter Ad Title"
            />
          </div>

          <div className="mb-6">
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Category *</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category *"
              >
                <MenuItem value="">-- Select Category --</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Real-estate">Real Estate</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
                <MenuItem value="Mobile">Mobile</MenuItem>
                <MenuItem value="Animals">Animals</MenuItem>
                <MenuItem value="Home Appilances">Home Appilances</MenuItem>
                <MenuItem value="Vehicles">Vehicles</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Price *"
              variant="outlined"
              fullWidth
              required
              value={adPrice}
              onChange={(e) => setAdPrice(e.target.value)}
              placeholder="Enter Ad Price"
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Model *"
              variant="outlined"
              fullWidth
              required
              value={adModel}
              onChange={(e) => setAdModel(e.target.value)}
              placeholder="Enter Ad Model"
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Year *"
              variant="outlined"
              fullWidth
              required
              value={adYear}
              onChange={(e) => setAdYear(e.target.value)}
              placeholder="Enter Ad Year"
              type="number"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-5">
              <Button
                variant="contained"
                component="label"
                color="primary"
                className="mr-4"
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Button>
              <span>{photo ? photo.name : '   No file chosen'}</span>
            </div>
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Description *"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
              placeholder="Include Brands, Model, Age and Included Accessories"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="w-full py-3"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> // Show loader while loading
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
