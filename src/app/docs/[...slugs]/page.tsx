
export default async function page({params}:any) {
    // console.log(params.slugs)
    const {slugs}= await params

    console.log(slugs)

  return (
    <div>page</div>
  )
}
