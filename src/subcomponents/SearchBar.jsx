import { VscChevronDown, VscChevronUp, VscSearch } from "react-icons/vsc";
import React, { useState } from 'react'

const SearchBar = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <React.Fragment>
      <form>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Category
          </label>
          <button
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium 
            text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-full 
            hover:bg-gray-200 dark:bg-gray-700 
            dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"

            type="button"
            id='dropdown-button'>All categories
            <span className='ml-2'>
                {
                    isOpen ? <VscChevronDown className='h-5 w-5 fill-inherit'/> :
                    <VscChevronUp className="h-5 w-5 fill-inherit"/>
                }
            </span>
          </button>
          <input type="text" placeholder="Search for Products..." className="border-none sm:w-96"/>
          <button className="h-auto w-8 gap-x-2 flex items-center justify-center border-red-600 bg-blue-700 py-2.5 rounded-r-full hover:bg-blue-500">
            <VscSearch className="h-5 w-5 fill-slate-300"/>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SearchBar
