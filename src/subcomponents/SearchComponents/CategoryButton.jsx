import React, { useState, useEffect, useRef } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import CategoryListItem from './CategoryListItem';

const CategoryButton = ({ CategoryItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="bg-sky-100 text-gray-900 rounded-l-full lg:flex">
        <button
          ref={buttonRef}
          onClick={handleToggle}
          className="flex p-3 px-4 gap-x-4 flex-shrink-0"
        >
          <span className="font-semibold flex-shrink-0 max-sm:text-sm items-center flex justify-center">
            Marketplace
          </span>
          {isOpen ? (
            <VscChevronDown className="h-6 w-6 font-bold flex-shrink-0" />
          ) : (
            <VscChevronUp className="h-6 w-6 font-bold flex-shrink-0" />
          )}
        </button>
      </div>
      <CategoryListItem CategoryItem={CategoryItem} isOpen={isOpen} handleToggle={handleToggle} />
    </React.Fragment>
  );
};

export default CategoryButton;