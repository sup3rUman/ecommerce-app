import React from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import CategoryListItem from './CategoryListItem';



const CategoryButton = ({isOpen, handleToggle, CategoryItem}) => {

  return (
    <React.Fragment>
      <div className=" bg-sky-100 text-gray-900 rounded-l-full lg:flex">
        <button
          onClick={handleToggle}
          className="flex p-3 px-4 gap-x-4 flex-shrink-0 "
        >
          <span className="font-semibold flex-shrink-0 max-sm:text-sm items-center flex justify-center">
            All Categories
          </span>
          {isOpen ? (
            <VscChevronDown className="h-6 w-6 font-bold flex-shrink-0" />
          ) : (
            <VscChevronUp className="h-6 w-6 font-bold flex-shrink-0" />
          )}
        </button>
      </div>
      <CategoryListItem CategoryItem={CategoryItem} isOpen={isOpen} handleToggle={handleToggle}/>
    </React.Fragment>
  );
}

export default CategoryButton
