import React from "react"

const NotFoundPage = () => {
  return (
    <div className="404">
      <p>Page not Found</p>
    </div>
  )
}

export default NotFoundPage

export const Head = () => {
  return(
      <>
          <title>Loon Lookout</title>
          <meta name='description' content='Cheap, cozy cottage for rent in Swanville, Maine.' />
          <meta name='keywords' content='Rent Swanville Maine Cottage House Swanlake Lake'/>
          <link rel="canonical" href="https://loonlookout.com" />
      </>
  );
}