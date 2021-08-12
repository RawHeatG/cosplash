import { useState } from "react";
import { EnlargedImage, SearchBar, Filter } from "../Components";
import { useData } from "../Contexts";

export const Home = () => {
  const { images } = useData();
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="m-4">
      {console.log(images)}
      {enlargedImage && (
        <EnlargedImage image={enlargedImage} setImage={setEnlargedImage} />
      )}
      <div className="flex justify-between m-4 text-2xl">
        <SearchBar />
        <Filter />
      </div>
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
