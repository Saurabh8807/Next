// import React from 'react'
"use client"
import { useRouter } from "next/navigation"
export default function page () {

  const router = useRouter()
  const handleClick=()=>{
    console.log("clickng")
    router.push('/') 
  }
  return (
    <div>
      <h1>order-product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>

  )
}
