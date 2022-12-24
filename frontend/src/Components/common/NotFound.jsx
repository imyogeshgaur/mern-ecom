import React from 'react'
import "../../styles/NotFound.css"

const NotFound = () => {
  const goToPreviousPage = () => {
    window.history.back();
  }
  return (
    <>
      <div class="card mx-auto">
        <div class="card-body">
          <h1 class="card-title text-light text-center">OOPS !!!! Page Not Found</h1>
          <div style={{ width: "100%", height: 0, paddingBottom: "56%", position: "relative" }}><iframe src="https://giphy.com/embed/rZYf7RpRvRWOaMCCZz" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </div>
        <button className="btn btn-primary w-50 mx-auto mb-4" onClick={goToPreviousPage}>Back To Previous Page </button>
      </div>
    </>
  )
}

export default NotFound