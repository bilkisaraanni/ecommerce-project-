import React, {Children} from 'react'

const Container = ({children, className}) => {
  return (
    <div>
      <div className={`${className} container`}>
          {children}
      </div>
    </div>
  )
}

export default Container



