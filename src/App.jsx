import { useState } from 'react'
import Regfom from './Components/Regfom'
import "./App.css"
import Team from './Components/userview/Teamcard'



const App = () => {

  const [newObject, setNewObject] =useState({})
  return (
    <div>
      <div className='app'>
        <div className='view'> 
          <Regfom setNewObject={setNewObject}/>

          <Team passUser={newObject}/>


        </div>


      </div>
     
    </div>
  )
}

export default App