import React, { useState } from 'react';

function DarkTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="flex items-center space-x-2">
        <img
          alt="Circular logo with a quarter segment filled"
          className="w-12 h-12"
          height="50"
          src="https://storage.googleapis.com/a1aa/image/Ifu8B0pweIvYnEH3nTe8328Afad1ZOFofelcH5deLY2UpEQAKA.jpg"
          width="50"
        />
        <span
          className="text-4xl font-bold"
          style={{
            fontFamily: "'Fredoka One', cursive",
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          OLX
        </span>
      </div>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded"
        style={{ color: isDarkMode ? 'white' : 'black' }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default DarkTheme;
