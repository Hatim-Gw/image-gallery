import React, { useState } from "react";

const SearchImage = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded-md  overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex item-center border-b border-b-2">
          <input
            type="text"
            placeholder="Search images..."
            className=" w-full appearance-none bg-transparent border-none  focus:outline-none "
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
