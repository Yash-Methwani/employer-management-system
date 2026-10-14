import React, { Children } from 'react'


const AuthProvider = ({Children}) => {
  return (
    <div>
      {Children}
    </div>
  )
}

export default AuthProvider