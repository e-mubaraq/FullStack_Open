import React from 'react'

const Filter = ({ showSearch, handleSearch }) => {
  return(
    <div>
        filter shown with 
        <input value={showSearch} onChange={handleSearch}/>
    </div>
  )
}
    
export default Filter