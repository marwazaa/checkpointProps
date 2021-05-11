import './App.css';
import Pcomponent from './profile/Profilecomponent'
import image from './img.jpg'


import React from 'react'

function App() {

  const handleName=(name)=> {
    alert (`my name is ${name}`)
  }

  return (
    <div className="App">

      <Pcomponent
  
      fullName="marwa zaabi" 
      bio="mz"
      profession="master"
      handleName={handleName} >

     <div>
         <img src={image} width='400px'></img>
      </div>


      </Pcomponent>

    </div>
    
  )
}

export default App;
