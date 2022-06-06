import React from 'react'
import Form, { History } from './Form'
import Graph from './Graph'
import './scss/index.scss'

const App = () => {
  

  
  return (
    <>
    
  
    <h1 className='tit'>expense tracker</h1>
    <div className='container app'>
     <div className="wrp">
     
   

     <div className="graph">
      
     <Graph/>
 
       </div>
     </div>
     
  
      <Form/>
        
      
       
    </div>
    </>
    )
}

export default App