import React from 'react'

const Modal = ({ open, children, state }) => {
if(!open) return null;
  return (
    <div id="modal">
        {state}
        {children}
    </div>
  )
}

export default Modal