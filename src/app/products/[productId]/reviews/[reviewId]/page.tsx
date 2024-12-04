// "use client"
export default async function page({params}:{params:{productId:string,reviewId:string}}) {
  
  const {productId,reviewId}=await params

  function getRandomInt(count:number){
    return Math.floor(Math.random() * count) + 1;
  }

  const randomNumber = getRandomInt(100)
  return (
    <>
    <div>This is Product {productId} and review {reviewId}</div>
    <h1>hello</h1>
    </>
  )
}
 