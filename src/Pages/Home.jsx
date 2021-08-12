import { useEffect, useState } from "react";
import { EnlargedImage } from "../Components/EnlargedImage";
import { getCollection } from "../Services/unsplashServices";

export const Home = () => {
  const [images, setImages] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        const response = await getCollection(2423569);
        console.log(response);
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {enlargedImage && (
        <EnlargedImage image={enlargedImage} setImage={setEnlargedImage} />
      )}
      {!images.length ? (
        <h1>No Images</h1>
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-6 sm:grid-cols-3">
          {images.map((image) => (
            <img
              className="h-64 object-cover rounded-md cursor-pointer"
              src={image.urls.thumb}
              alt={image.alt_description}
              key={image.id}
              onClick={() => setEnlargedImage(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
