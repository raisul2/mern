import React from 'react'
import {useForm} from 'react-hook-form'
import {FaTrash} from 'react-icons/fa'
import {default as api} from './store/rtk'
const Form = () => {
    const { register, handleSubmit , resetField  } = useForm()

    const [addTranstion] = api.useAddTranstionMutation()



    const onSubmit = async (data)=>{
     
      if(!data) return{}
      await addTranstion(data).unwrap()
         

      resetField('name')
      resetField('amount')

    }


    const { data, isSuccess, isFetching, isError }  =  api.useGetLablesQuery()


    let Transaction;


     if (isFetching) {
        Transaction =  <div>Fetching</div>
     }else if(isSuccess){
       Transaction =  data.map((item, index)=>(<History   key={index} data={item} />))
     }else if(isError){
       Transaction = <div>Error</div>
       
     }


 

  return (
     
      
       <div className='form-main'>
       


    <div className='form'>
      
      <h3>Transaction</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
          
 
         <input type="text" 
         
         placeholder='Sallary, House Rend, SIP' 
         {...register('name')}
         />
       


       <select {...register('type')} className="option">
         <option value="investment">investment</option>
         <option value="expense">expense</option>
         <option value="saving">saving</option>
       
       </select>
      
       <input {...register('amount')} type="text"
       
       
       placeholder='Amount' />

       <button>Make Transaction</button>

      </form>
        
          
    
    </div>
    <div className="history">
    <h3>History</h3>
    <div className="box">

    { 
      Transaction
    }
    </div>
    </div>
    </div>
    
  )
}

export default Form



export function History({data}) {
    

    return(
     
         
          
      
            <span style={{borderRight: `8px solid ${data.color ?? 'black'}`}}><FaTrash  />{data.type}</span>
        
           
      
           
        
      
    )

}