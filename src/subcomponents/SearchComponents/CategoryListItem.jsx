import React from 'react'
import { Link } from 'react-router-dom'


const CategoryListItem = ( {CategoryItem, isOpen,  handleToggle} ) => {
  return (
    <React.Fragment>
      <div className={`absolute flex top-16 w-64 ${ isOpen ? '' : 'hidden'} translate-y-full transition-transform duration-1000 ease-in-out`}>
        <div className='h-4 w-4 bg-sky-200 relative z-40 rotate-45 bottom-2 left-32'/>
        <ul className='py-4 bg-sky-200 rounded-xl absolute'>
          {
            CategoryItem.map( (category) => {
              return (
                <li key={category.id} className='hover:bg-sky-100 hover:z-40 border-b-2 border-sky-300  mb-1 p-2 px-6 text-lg font-semibold'>
                  <Link to={category.path} onClick={handleToggle}>
                    {category.name} 
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>


    </React.Fragment>
  )
}

export default CategoryListItem