
import React from 'react';
import CLOUDINARY_BASE_URL from './cloudinaryConfig';

const ImageComponent = ({className, imageName }) => {
  const imageUrl = `${CLOUDINARY_BASE_URL}${imageName}`;

  return (
    <img className={className} src={imageUrl} alt={imageName} onError={(e) => e.target.src = 'fallback_image_url.jpg'} />
  );
};

export default ImageComponent;
