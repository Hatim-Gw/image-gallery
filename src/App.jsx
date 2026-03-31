import react, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchImage from "./components/SearchImage";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");
  const apiKey = "55232850-cfe99f3f58462d0fef17e835c";

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <SearchImage searchText={(text) => setTerm(text)} />
        {loading ? (
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
