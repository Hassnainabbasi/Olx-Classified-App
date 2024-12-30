// // import React, { useState } from 'react';
// // import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// // const HeroSection = () => {
// //   const [category, setCategory] = useState('category'); // Default category state

// //   const handleCategoryChange = (event) => {
// //     setCategory(event.target.value);
// //   };

// //   return (
// //     <section 
// //       className="relative w-full h-[70vh] bg-cover bg-center" 
// //       style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)' }}>
      
// //       <div className="absolute inset-0 bg-black opacity-70"></div> 
// //       <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
// //         <div className="text-center">
// //           <h2 className="text-3xl md:text-5xl font-semibold mb-4">Olx is The Largest MarketPlace of Pakistan's</h2>
// //           <h3 className="text-lg md:text-xl mb-8">A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying it.</h3>

// //           <form className="flex justify-center gap-4 items-center">
// //             <div>
// //               <input 
// //                 type="text" 
// //                 placeholder="Search for items..." 
// //                 className="px-4 py-4 w-64 rounded-xl border-2 border-white text-black outline-none"
// //               />
// //             </div>

// //             <div>
// //               <FormControl className="w-64 rounded-full border-2 border-white">
// //                 {/* <InputLabel style={{color : "white", borderColor : "white"}}>Category</InputLabel> */}
// //                 <Select
// //                   label="Category"
// //                   value={category}
// //                   onChange={handleCategoryChange}
// //                   className="rounded-full text-white bg-white"
// //                   MenuProps={{
// //                     PaperProps: {
// //                       sx: {
// //                         backgroundColor: 'black',
// //                         color: 'white',
// //                       },
// //                     },
// //                   }}
// //                 >
// //                   <MenuItem value="Category" disabled >Category</MenuItem>
// //                   <MenuItem value="Electronics" className={category === 'Electronics' ? 'text-white' : 'text-black'}>
// //                     Electronics
// //                   </MenuItem>
// //                   <MenuItem value="Fashion" className={category === 'Fashion' ? 'text-white' : 'text-black'}>
// //                     Fashion
// //                   </MenuItem>
// //                   <MenuItem value="Real-estate" className={category === 'Real-estate' ? 'text-white' : 'text-black'}>
// //                     Real Estate
// //                   </MenuItem>
// //                   <MenuItem value="Vehicles" className={category === 'Vehicles' ? 'text-white' : 'text-black'}>
// //                     Vehicles
// //                   </MenuItem>
// //                  <MenuItem value="Furniture" className={category === 'Furniture' ? 'text-white' : 'text-black'}>Furniture</MenuItem>
// //                  <MenuItem value="Mobile" className={category === 'Mobile' ? 'text-white' : 'text-black'}>Mobile</MenuItem>
// //                  <MenuItem value="Animals" className={category === 'Animals' ? 'text-white' : 'text-black'}>Animals</MenuItem>
// //                  <MenuItem value="Home Appilances"className={category === 'Home Appilances' ? 'text-white' : 'text-black'}>Home Appilances</MenuItem>
                                
// //                 </Select>
// //               </FormControl>
// //             </div>

// //             <div>
// //               <Button 
// //                 variant="contained" 
// //                 color="primary" 
// //                 size="large"
// //                 className="text-white bg-orange-500 hover:bg-orange-600">
// //                 Search
// //               </Button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // export default HeroSection;
// // import React, { useState } from 'react';
// // import { Button, MenuItem, Select, FormControl } from '@mui/material';

// // const HeroSection = () => {
// //   const [category, setCategory] = useState('category'); // Default category state

// //   const handleCategoryChange = (event) => {
// //     setCategory(event.target.value);
// //   };

// //   return (
// //     <section 
// //       className="relative w-full h-[70vh] bg-cover bg-center transition-all" 
// //       style={{ 
// //         backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)',
// //         backgroundColor: 'white',
// //       }}
// //     >
// //       {/* Overlay for dark/light mode */}
// //       <div className="absolute inset-0 bg-black dark:bg-white dark:opacity-70 opacity-50 transition-all"></div>

// //       <div className="relative z-10 flex justify-center items-center w-full h-full px-6 md:px-12">
// //         <div className="text-center">
// //           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white dark:text-gray-900">
// //             OLX: The Largest Marketplace of Pakistan
// //           </h2>
// //           <h3 className="text-lg md:text-xl mb-8 text-gray-300 dark:text-gray-600">
// //             "A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It."
// //           </h3>

// //           {/* Search Form */}
// //           <form className="flex flex-wrap justify-center gap-4 items-center">
// //             {/* Search Input */}
// //             <div>
// //               <input 
// //                 type="text" 
// //                 placeholder="Search for items..." 
// //                 className="px-4 py-3 w-64 md:w-80 rounded-lg border border-gray-200 dark:border-gray-400 text-black outline-none focus:ring-2 focus:ring-orange-500"
// //               />
// //             </div>

// //             {/* Category Select */}
// //             <div>
// //               <FormControl className="w-64 md:w-80">
// //                 <Select
// //                   value={category}
// //                   onChange={handleCategoryChange}
// //                   className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
// //                   MenuProps={{
// //                     PaperProps: {
// //                       sx: {
// //                         backgroundColor: 'white',
// //                         color: 'black',
// //                       },
// //                     },
// //                   }}
// //                 >
// //                   <MenuItem value="Category" disabled>
// //                     Category
// //                   </MenuItem>
// //                   <MenuItem value="Electronics">Electronics</MenuItem>
// //                   <MenuItem value="Fashion">Fashion</MenuItem>
// //                   <MenuItem value="Real-estate">Real Estate</MenuItem>
// //                   <MenuItem value="Vehicles">Vehicles</MenuItem>
// //                   <MenuItem value="Furniture">Furniture</MenuItem>
// //                   <MenuItem value="Mobile">Mobile</MenuItem>
// //                   <MenuItem value="Animals">Animals</MenuItem>
// //                   <MenuItem value="Home Appliances">Home Appliances</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </div>

// //             {/* Search Button */}
// //             <div>
// //               <Button 
// //                 variant="contained" 
// //                 color="primary" 
// //                 size="large"
// //                 className="text-white bg-orange-500 hover:bg-orange-600 rounded-lg px-6 py-3"
// //               >
// //                 Search
// //               </Button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // export default HeroSection;
// // import React, { useState } from 'react';
// // import { Button, MenuItem, Select, FormControl } from '@mui/material';

// // const HeroSection = () => {
// //   const [category, setCategory] = useState('category'); // Default category state

// //   const handleCategoryChange = (event) => {
// //     setCategory(event.target.value);
// //   };

// //   return (
// //     <section
// //       className="relative w-full h-[70vh] bg-cover bg-center transition-all"
// //       style={{
// //         backgroundImage:
// //           'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)',
// //         backgroundColor: 'white',
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black opacity-50 transition-all"></div>

// //       <div className="relative z-10 flex justify-center items-center w-full h-full px-6 md:px-12">
// //         <div className="text-center">
// //           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
// //             OLX: The Largest Marketplace of Pakistan
// //           </h2>
// //           <h3 className="text-lg md:text-xl mb-8 text-white">
// //             "A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It."
// //           </h3>

// //           <form className="flex flex-wrap justify-center gap-4 items-center">
// //             <div>
// //               <input
// //                 type="text"
// //                 placeholder="Search for items..."
// //                 className="px-4 py-3 w-64 md:w-80 rounded-lg border border-gray-200 text-black outline-none focus:ring-2 focus:ring-orange-500"
// //               />
// //             </div>

// //             <div>
// //               <FormControl className="w-64 md:w-80">
// //                 <Select
// //                   value={category}
// //                   onChange={handleCategoryChange}
// //                   className="bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
// //                   MenuProps={{
// //                     PaperProps: {
// //                       sx: {
// //                         backgroundColor: 'white', 
// //                         color: 'black', 
// //                       },
// //                     },
// //                   }}
// //                 >
// //                   <MenuItem value="Category" disabled>
// //                     Category
// //                   </MenuItem>
// //                   <MenuItem value="Electronics">Electronics</MenuItem>
// //                   <MenuItem value="Fashion">Fashion</MenuItem>
// //                   <MenuItem value="Real-estate">Real Estate</MenuItem>
// //                   <MenuItem value="Vehicles">Vehicles</MenuItem>
// //                   <MenuItem value="Furniture">Furniture</MenuItem>
// //                   <MenuItem value="Mobile">Mobile</MenuItem>
// //                   <MenuItem value="Animals">Animals</MenuItem>
// //                   <MenuItem value="Home Appliances">Home Appliances</MenuItem>
// //                 </Select>
// //               </FormControl>
// //             </div>
// //             <div>
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 size="large"
// //                 className="text-white bg-orange-500 hover:bg-orange-600 rounded-lg px-6 py-3"
// //               >
// //                 Search
// //               </Button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// import React, { useState } from "react";
// import { Button, MenuItem, Select, FormControl } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom

// const HeroSection = () => {
//   const [category, setCategory] = useState("category"); // Default category state
//   const navigate = useNavigate(); // Hook for navigating to other routes

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSearch = () => {
//     if (category !== "category") {
//       navigate(`/categories/${category}`); // Navigate to category page
//     }
//   };

//   return (
//     <section
//       className="relative w-full h-[70vh] bg-cover bg-center transition-all"
//       style={{
//         backgroundImage:
//           "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)",
//         backgroundColor: "white",
//       }}
//     >
//       {/* Overlay for dark/light mode */}
//       <div className="absolute inset-0 bg-black dark:bg-white dark:opacity-70 opacity-50 transition-all"></div>

//       <div className="relative z-10 flex justify-center items-center w-full h-full px-6 md:px-12">
//         <div className="text-center">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white dark:text-gray-900">
//             OLX: The Largest Marketplace of Pakistan
//           </h2>
//           <h3 className="text-lg md:text-xl mb-8 text-gray-300 dark:text-gray-600">
//             "A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying It."
//           </h3>
//           {/* <div class="search-bar">
//             <form>
//               <div class="row">
//                 <div class="form-group col-lg-7">
//                   <input type="search" id="searchBox" name="search" placeholder="What are you searching for?" />
//                 </div>
//                 <div class="form-group col-lg-3">
//                   <div class="btn-group bootstrap-select listing-categories dropup"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" data-id="searchCat" title="All Categories" aria-expanded="false"><span class="filter-option pull-left">All Categories <i class="fa fa-angle-down"></i></span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox" style="max-height: 194.062px; overflow: hidden; min-height: 86px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -72px, 0px);" x-placement="top-start"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false" style="max-height: 178.062px; overflow-y: auto; min-height: 70px;"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">All Categories</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Mobiles</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Vehicles</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Bikes</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Furniture</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Electronics</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Home Appliances</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Fashion</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Animals</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="searchCat" class="listing-categories" tabindex="-98">
//                       <option selected="" value="name" title="All Categories <i class=&quot;fa fa-angle-down&quot;></i>">All Categories</option>
//                       <option title="Mobiles <i class=&quot;fa fa-angle-down&quot;></i>" value="Mobiles">Mobiles</option>
//                       <option title="Vehicles <i class=&quot;fa fa-angle-down&quot;></i>" value="Vehicles">Vehicles</option>
//                       <option title="Bikes <i class=&quot;fa fa-angle-down&quot;></i>" value="Bikes">Bikes</option>
//                       <option title="Furniture <i class=&quot;fa fa-angle-down&quot;></i>" value="Furniture">Furniture</option>
//                       <option title="Electronics <i class=&quot;fa fa-angle-down&quot;></i>" value="Electronics">Electronics</option>
//                       <option title="Home Appliances <i class=&quot;fa fa-angle-down&quot;></i>" value="Home Appliances">Home Appliances</option>
//                       <option title="Fashion <i class=&quot;fa fa-angle-down&quot;></i>" value="Fashion">Fashion</option>
//                       <option title="Animals <i class=&quot;fa fa-angle-down&quot;></i>" value="Animals">Animals</option>
//                   </select></div>
//                 </div>
//                 <div class="form-group col-lg-2">
//                   <input type="button" value="Search" onclick="return searchBtn()" class="submit" />
//                 </div>
//               </div>
//             </form>
//           </div> */}

//           {/* Search Form */}
//           <form className="flex flex-wrap justify-center gap-4 items-center">
//             {/* Search Input */}
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search for items..."
//                 className="px-4 py-3 w-64 md:w-80 rounded-lg border border-gray-200 dark:border-gray-400 text-black outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>

//             {/* Category Select */}
//             <div>
//               <FormControl className="w-64 md:w-80">
              //   <Select
              //     value={category}
              //     onChange={handleCategoryChange}
              //     className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              //     MenuProps={{
              //       PaperProps: {
              //         sx: {
              //           backgroundColor: "white",
              //           color: "black",
              //         },
              //       },
              //     }}
              //   >
              //     <MenuItem value="category" disabled>
              //       Category
              //     </MenuItem>
                //   <MenuItem value="Electronics">Electronics</MenuItem>
                //   <MenuItem value="Fashion">Fashion</MenuItem>
                //   <MenuItem value="Real-estate">Real Estate</MenuItem>
                //   <MenuItem value="Vehicles">Vehicles</MenuItem>
                //   <MenuItem value="Furniture">Furniture</MenuItem>
                //   <MenuItem value="Mobile">Mobile</MenuItem>
                //   <MenuItem value="Animals">Animals</MenuItem>
                //   <MenuItem value="Home Appliances">Home Appliances</MenuItem>
                // </Select>
              // </FormControl>
//             </div>

//             {/* Search Button */}
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 className="text-white bg-orange-500 hover:bg-orange-600 rounded-lg px-6 py-3"
//                 onClick={handleSearch} // Trigger search when clicked
//               >
//                 Search
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react'
import AddBanner from '../items/AddBanner'

export default function HeroSection() {
  return (
        <AddBanner />
  )
}
