"use client"

import { SearchManufacturer } from "."

function SearchBar() {
    const handleSearch = () => {}
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer/>
        </div>
    </form>
  )
}

export default SearchBar