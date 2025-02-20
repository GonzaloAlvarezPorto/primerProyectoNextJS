import { useSearchParams } from 'next/navigation'
import React from 'react'

const UserPage = () => {

    const params = useSearchParams();
    console.log(params);
    
  return (
    <div>
        
        <button onClick={() =>{
            console.log('works')
        }}>
            Click
        </button>

    </div>
  )
}

export default UserPage