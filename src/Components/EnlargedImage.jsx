export const EnlargedImage = ({ image, setImage }) => {
  return (
    <div className="fixed flex justify-center items-center w-screen h-screen bg-black bg-opacity-20">
      <div className="h-3/4 w-1/2 flex justify-center items-center m-10">
        <img
          className="object-fit rounded-xl"
          src={image.urls.full}
          alt={image.alt_description}
        />
        <button
          className="absolute top-10 right-10 px-6 py-4 rounded-full text-2xl bg-white"
          onClick={() => setImage(null)}
        >
          X
        </button>
      </div>
    </div>
  );
};
