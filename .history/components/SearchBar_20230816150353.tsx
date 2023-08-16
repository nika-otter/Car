"use client"

import { SearchManufacturer } from ".";

import {use, useState} from "react";

const SearchButton = (otherClasses) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>
)


function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {}
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>
            <SearchButton otherClasses="sm:hidden" />
        </div>
    </form>
  )
}

export default SearchBar