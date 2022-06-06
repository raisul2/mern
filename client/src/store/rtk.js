import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:8080'

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}) ,
    endpoints: builder =>({
            getCategories: builder.query({
                //get request 
                 query:()=> '/api/categories',
                  providesTags:['categories']
            }),


            //get lables 

            getLables:builder.query({
                query:()=>'/api/lables',
                providesTags : ['transaction']
            }),

            /// add new transaction

            addTranstion:builder.mutation({
                query:(initial) =>({
                    url:'/api/tranction',
                    method:"POST",
                    body:initial

                }),
                invalidatesTags: ['transaction']
                
            }),
        deletTranstion:builder.mutation({
                query:(recodeid) =>({
                    url:'/api/tranction',
                    method:"DELETE",
                    body:recodeid

                }),
                invalidatesTags: ['transaction']
            })

    })
})





export default apiSlice;