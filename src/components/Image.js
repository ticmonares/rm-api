import { useContext } from "react";

import ImageContext from "../context/ImageContext";

const Image = ({alt = "", onCustomError = () => null}) => {
    const imageURL = useContext(ImageContext);
  
    return (
      <img
        alt={alt}
        src={imageURL}
        onError={onCustomError}
      />
    );
  };

  export default Image;