// import React from 'react'

// const Cursor = () => {


//   return (
//     <div className=' absolute'>
//       <div className="cursore-dot       w-3 h-3   rounded-full  bg-zinc-900 "></div>
//       <div className="cursore-outerline w-8 h-8 rounded-full border-2 border-cyan-900 "></div>

//     </div>
//   )
// }

// export default Cursor


import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const cursorStyle = {
    top: position.y + 'px',
    left: position.x + 'px',
    pointerEvents: 'none',

  };

  return <div style={cursorStyle}>
    <div style={cursorStyle} className="w-5 h-5 border-2 fixed bg-zinc-900 rounded-full z-50 "></div>
  </div>;
};

export default Cursor;