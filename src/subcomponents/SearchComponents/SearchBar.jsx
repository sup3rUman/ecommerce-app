import React, { useState } from 'react'
import { CategoryItem } from "../../data";
import CategoryButton from "./CategoryButton";
import SearchInput from './SeachInput'

const SearchBar = ( ) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen( (prev) => !prev)
  }
  return (
    <React.Fragment>
      <div className="inline-flex p-4 flex-shrink-0">
        <CategoryButton isOpen={isOpen} handleToggle={handleToggle} CategoryItem={CategoryItem}/>
        <SearchInput/>
      </div>
    </React.Fragment>
  );
}

export default SearchBar
