import { forwardRef } from "react";




const Image = forwardRef(({ src, alt, ...props }, ref) => {


  return <img ref={ref} src={src} alt={alt} {...props} />;
}

)

export default Image;