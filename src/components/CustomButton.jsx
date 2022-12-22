import React from 'react';

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      className={`font-epilogue font-semibold text-[16px] leading-[26px]
       text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      type={btnType}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
