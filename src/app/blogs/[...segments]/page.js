import React from 'react'

const SingleBlogPage = ({params}) => {
  const [year, id] = params.segments;
    console.log(params.segments)


  return (
    <div>SingleBlogPage Year {year} and ID: {id} </div>
  )
}

export default SingleBlogPage