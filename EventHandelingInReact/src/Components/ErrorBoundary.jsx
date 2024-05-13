import React from 'react'

function ErrorBoundary({heroName}) {
    if(heroName==='joker'){
        throw new Error("not an hero!")
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}

export default ErrorBoundary
