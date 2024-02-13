import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => 'accounts',
      providesTags : ['account']
    }),
    addAccounts: builder.mutation({
      query: (amount , id) => ({
        url: 'accounts',
        method : 'POST',
        body : {
            id : id,
            amount : amount
        }
      }),
      invalidatesTags : ['account']
    }),
    deleteAccounts: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method : 'DELETE',
      }),
      invalidatesTags : ['account']
    }),
    updateAccounts: builder.mutation({
      query: ({id ,amount}) => ({
        url: `accounts/${id}`,
        method : 'PATCH',
        body: {
          amount:amount
        }
      }),
      invalidatesTags : ['account']
    }),
  }),
})

export const {useGetAccountsQuery,useAddAccountsMutation, useDeleteAccountsMutation,useUpdateAccountsMutation} = adminApi