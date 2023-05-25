import React from 'react'
import { VscSearch } from 'react-icons/vsc';

const SeachInput = () => {
  return (
    <React.Fragment>
      <form
        action=""
        className="flex items-center justify-center gap-x-1"
      >
        <div className="p-1 pr-6 bg-sky-100 rounded-r-full border-l-2 border-sky-400">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search for Shops, Products..."
            className="w-full md:w-96 focus:border-red-500 border-none bg-transparent"
          />
        </div>
        <button className="flex-shrink-0 rounded-full h-12 w-12 bg-sky-100 flex items-center justify-center">
          <VscSearch className="h-5 w-5 font-semibold" />
        </button>
      </form>
    </React.Fragment>
  );
}

export default SeachInput
