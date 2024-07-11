import React from 'react'

const Modal = (props) => {
    console.log("first",props)
  return (
    <div style={{border:"1px solid black", width:"40%", height:"50px"}}>
        {props.name}
    </div>
  )
}

export default Modal