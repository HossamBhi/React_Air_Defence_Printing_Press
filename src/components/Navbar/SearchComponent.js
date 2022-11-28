import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (e.target?.value?.trim()?.length === 0) {
      navigate("/");
    } else {
      navigate("/search/" + e.target.value);
    }
  };

  return (
    <div className="search-con">
      <input
        placeholder="بتدور علي ايه ..."
        value={searchValue}
        type="text"
        onChange={handleChange}
        className="search-input"
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};

export default Search;
