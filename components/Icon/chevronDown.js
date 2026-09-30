import React from "react";

const ChevronDown = ({ className }) => {
  const classNameCss = className ? ` ${className}` : '';
  return (
<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.925 2.86102e-06L10.8083 0.884169L5.99417 5.7C5.91703 5.77763 5.8253 5.83924 5.72425 5.88128C5.62321 5.92332 5.51485 5.94496 5.40542 5.94496C5.29598 5.94496 5.18762 5.92332 5.08658 5.88128C4.98554 5.83924 4.89381 5.77763 4.81667 5.7L0 0.884169L0.883333 0.000835896L5.40417 4.52084L9.925 2.86102e-06Z" fill="#0F0F0F"/>
</svg>


  );
};

export default ChevronDown;