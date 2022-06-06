import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    categories:[],
    transction:[]
}

export const expenseSlice =  createSlice({

    name:"expense",
    initialState,
    getTransactions:(state) =>{
         /// get code

           
    }
 
})


export const {getTransactions} = expenseSlice.actions 

export default expenseSlice.reducer