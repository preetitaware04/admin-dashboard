import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({ placeholder, width }) => {
  return (
    <div
      className={`searchbox relative border border-[#d2d2d2] dark:border-gray-700 bg-transparent rounded-lg shadow-sm flex gap-3 items-center px-3 py-1`}
      style={{ width: width }}
    >
      <div className="bg-[#F3F3F3] dark:bg-gray-700 w-11 h-11 rounded-xl flex justify-center items-center">
        <CiSearch size={30} className="w-5 h-5" />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBox;
