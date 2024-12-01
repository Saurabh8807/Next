// "use client"

import { Metadata } from "next"
import Link from "next/link"


type props ={
  params:{
    productId:string
  }
}

// export async function generateMetaData({params}:props){
//   // const title = await new Promise(resolve=>{
//   //   setTimeout(() => {
//   //     resolve(`iphone ${params.productId}`)
//   //   }, 100);
//   // })

//   const { productId }= await params

//   return{
//     title:`Product ${productId}`,
//   }
// }

export async function generateMetadata({ params }:any) {
  const { productId }= await params

  return {
    title:`Product ${productId}`,
  }
}

export default async function page({params}:props) {
    // alert(JSON.stringify(params))
    const { productId }= await  params
  return (
    <div>
      <Link href="/products">Go back to products</Link>
      Product Details for page {productId}
      
       </div>
  )
}

