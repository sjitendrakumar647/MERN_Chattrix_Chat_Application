import React from 'react'
import Profilesection from './Profilesection'
import Chattingsection from './Chattingsection'

function Mainsection() {
  return (
    <div>
      <div className="w-full flex" style={{height:"calc(90vh)"}}>
        <div className="md:block hidden h-full md:w-120 text-center text-white">
        
        <Profilesection/>
        </div>
        
        <div className='md:block hidden bg-white w-1'></div>
        <div className="h-full w-full text-center text-white">
        
        <Chattingsection/>

        </div>
        
      </div>
    </div>
  )
}

export default Mainsection
