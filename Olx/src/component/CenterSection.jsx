
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const batayeehuyeeCategory = [
  {
    name: "Electronics",
    image: "https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg",
  },
  {
    name: "Furniture",
    image: "https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg",
  },
  {
    name: "Vehicles",
    image: "https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg",
  },
  {
    name: "Fashion",
    image: "https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg",
  },
  {
    name: "Home Appliances",
    image: "https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg",
  },
  {
    name: "Animals",
    image: "https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg",
  },
  {
    name: "Real-estate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKRJLPNxEPowc2If4skVlBzdQDnM1UAxCyw&s",
  },
  {
    name: "Mobiles",
    image: "https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg",
  },
];

export default function CenterSection() {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkmode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  // const isMobile = windowWidth < 768;
  // const categoriesToShow = showAll || !isMobile ? batayeehuyeeCategory.length : 1;

  return (
    <div
      className={`container mx-auto bg-gray-200 rounded-md `}
    >
      <h1
        className={`text-3xl font-semibold font-serif text-center mb-5
        }`}
      >
        Categories
      </h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 `}
      >
        {batayeehuyeeCategory.map((category, index) => (
          <Link to={`/categories/${category.name}`} key={index}>
            <div
              className={` text-center `}
            >
              <img
                src={category.image}
                alt={`${category.name} icon`}
                className="mx-auto mb-4 border rounded-lg"
                height={100}
                width={170}
              />
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* {isMobile && !showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSeeMore}
            className="bg-teal-600 text-white py-2 px-6 rounded-md"
          >
            See More Categories
          </button>
        </div>
      )} */}
    </div>
  );
}
