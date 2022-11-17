import React from 'react'
import "./style.css"
export default function Button({text, color}) {
  return (
    <button className='Buttons' style={{"background": color}}>{text}</button>
  )
}
