import React from "react";

const RenderImage = ({ alt, className, label, onClick, src }) => {
  return (
    <div>
      <img
        className={className}
        label={label}
        onClick={onClick}
        alt={alt}
        src={src}
      />
    </div>
  );
};
export default RenderImage;
