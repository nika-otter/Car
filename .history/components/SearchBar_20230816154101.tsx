"use client"

import Image from "next/image";
import { SearchManufacturer } from ".";
import { useRouter } from "next/navigation";

import {use, useState} from "react";

const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40} className="object-contain"
    />
  </button>
)


function SearchBar() {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(manufacturer === "" && model === "") {
        return alert("Please fill in the search bar");
      }
      updateSearchParams(model, manufacturer);
    }

    const updateSearchParams= (model:string, manufacturer:string) => {
        const seaechParams = new URLSearchParams(window.location.search);
        if(model){
          seaechParams.set("model", model);
        }else{
          seaechParams.delete("model");
        }
        if(manufacturer){
          seaechParams.set("manufacturer", manufacturer);
        }else{
          seaechParams.delete("manufacturer");
        }
        const newPathname=`${window.location.pathname}?${seaechParams.toString()}`;
        router.push(newPathname)
    }

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model "/>
          <input 
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
          />
            <SearchButton otherClasses="sm:hidden" />
        </div>
            <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar