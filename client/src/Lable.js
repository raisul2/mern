import React from 'react'
import {default as api} from './store/rtk'
const Lable = () => {

     const obj = [
         {
             type:"savings",
             color:'rgb(255, 205, 86)',
             percent:45
         },
         {
             type:"invesment",
             color:'rgb(54, 162, 235)',
             percent:20
         }, 
         {
             type:"expense",
             color:'rgb(255, 99, 132)',
             percent:10
         },
     ]


 const { data, isSuccess, isFetching, isError }  =  api.useGetCategoriesQuery()


 

  return (
    <div >
    {
        obj.map((item, index)=>(
            
            <Leblecomponent key={index} data={item}  />
        ))
    }
    
    
    </div>
  )
}

export default Lable



function Leblecomponent({data}) {







    return(
        <div  className="lebleboxs">
        
         <div className="text">
            <h3>{data.type ??""}<div className="it" style={{ background:data.color ?? 'black'}} ></div></h3>
             <span>{data.percent ?? 0}%</span>
      
         </div>
        
        </div>
    )
}