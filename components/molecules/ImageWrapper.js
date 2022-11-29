import Image from "next/image";

const ImageWrapper = ({ src, alt, className, layout = "fill" }) => {
  return (
    <div className={`${className}`}>
      <Image src={src} layout={layout} alt={alt} className={className} />
    </div>
  );
};

export default ImageWrapper;
