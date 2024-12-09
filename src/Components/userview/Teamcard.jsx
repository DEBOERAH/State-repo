import React from 'react'
import PropTypes ,{ propTypes } from 'prop-types'
import Team from './Team'


const Teamcard = ( {passUser}) => {
  return (
    <div>
        <h3> Name: {passUser.name}</h3>
        <h4>Email: {passUser.email}</h4>
        <h4>Age: {passUser.age}</h4>

        
        
        </div>
  )
}

Teamcard.propTypes = {
    passUser: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    })
    
}

export default Teamcard