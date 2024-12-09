import React from 'react'
import Teamcard from './Teamcard'

const Team = ( {user}) => {
  return (
    <div>
        <h1>our team</h1>
       <div>
        <Teamcard passUser={user}/>
       </div>
    </div>
  )
}

export default Team