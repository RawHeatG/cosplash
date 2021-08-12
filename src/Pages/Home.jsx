import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EnlargedImage, SearchBar, Filter, ImageCard } from "../Components";
import { useData } from "../Contexts";
import { getSearchedImages } from "../Services/dataServices";

export const Home = () => {
  const { images, sortBy, color, orientation, searchKeyword, dispatch } =
    useData();
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  const getMoreImages = async (
    searchKeyword,
    pageCount,
    sortBy,
    color,
    orientation
  ) => {
    try {
      const response = await getSearchedImages(
        searchKeyword,
        pageCount + 1,
        sortBy,
        color,
        orientation
      );
      dispatch({
        type: "SET_IMAGES",
        payload: images.concat(response.data.results),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="m-4">
      {enlargedImage && (
        <EnlargedImage image={enlargedImage} setImage={setEnlargedImage} />
      )}
      <div className="m-4 text-2xl">
        <SearchBar />
        <Filter />
      </div>
      {!images.length ? (
        <h1 className="text-3xl m-4">No Images Found 😢</h1>
      ) : (
        <InfiniteScroll
          dataLength={images.length}
          next={() => {
            getMoreImages(searchKeyword, pageCount, sortBy, color, orientation);
            setPageCount((prevValue) => prevValue + 1);
          }}
          hasMore={true}
        >
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 m-4">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                setEnlargedImage={setEnlargedImage}
                image={image}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};
