import React from 'react'

const FloatingBadge = ( {children, isOnline}) => {
  return (
    <React.Fragment>
      <div className="relative h-4 w-4 rounded-full bg-green-500  border-2 left-12 -top-4">{children}</div>
    </React.Fragment>
  );
}

export default FloatingBadge
