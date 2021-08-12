export const ImageCard = ({ image, setEnlargedImage }) => {
  return (
    <img
      className="h-60 w-full object-cover rounded-md cursor-pointer"
      src={image.urls.thumb}
      alt={image.alt_description}
      onClick={() => setEnlargedImage(image)}
    />
  );
};
