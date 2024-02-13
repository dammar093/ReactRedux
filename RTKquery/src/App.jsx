import { useState } from 'react'
import './App.css'
import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery, useUpdateAccountsMutation } from './api/adminSlice'
import { nanoid } from '@reduxjs/toolkit'
function App() {
  const [amount,setAmount] = useState(0)
  const [upamount,setUpAmount] = useState(0)
  const {data,error,isLoading}=useGetAccountsQuery()
  const [addAcount] = useAddAccountsMutation()
  const [deleteAccount]= useDeleteAccountsMutation()
  const [upadateAccount] =useUpdateAccountsMutation()
  return (
    <>
      <h1>RTK Query</h1>
       {

        data && data.map(account =><h3 key={account.id}>{account.id} Rs.{account.amount}  <button style={{backgroundColor:"blue",color:"white",fontSize:14,}} onClick={()=>deleteAccount(account.id)}>Delete Accounts</button>
         <br />
         <input type="number" value={upamount} onChange={(e)=> setUpAmount(Number(e.target.value))} style={{padding:10,margin:10}}/>
       <button style={{backgroundColor:"blue",color:"white",fontSize:14,}} 
       onClick={()=>upadateAccount({id:account.id,amount : upamount})}>
        Update Accounts
        </button>
        </h3>
        )

       }
      <input type="number" value={amount} onChange={(e)=> setAmount(Number(e.target.value))} style={{padding:10,margin:10}}/>
      <button style={{backgroundColor:"blue",color:"white",fontSize:14,}} onClick={()=>addAcount(amount,nanoid())}>Add Accounts</button>
    </>
  )
}

export default App
