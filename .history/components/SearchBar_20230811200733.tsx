"use client"

import { SearchManufacturer } from ".";

import {use, useState} from "react";

function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {}
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar