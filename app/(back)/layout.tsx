import React,{ReactNode} from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h2>Iam Dashboard only Pages Layout</h2>
      {children}
    </div>
  )
}

export default Layout