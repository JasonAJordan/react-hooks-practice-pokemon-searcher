import React from "react";

function Search({searchTerm, setSearchTerm} ) {

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} 
        value={searchTerm}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
