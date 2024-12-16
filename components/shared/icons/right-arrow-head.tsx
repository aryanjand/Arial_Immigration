import React from 'react';

export const RightArrowHead = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-600 mr-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        d="M10 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
