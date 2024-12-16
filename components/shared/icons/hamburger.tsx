import React from 'react';

export const Hamburger = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className="block h-1 w-8 bg-gray-900"></span>
      ))}
    </>
  );
};
