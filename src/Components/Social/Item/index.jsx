import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export default function Item({Name, back, color, link, DeleteDate}) {
  return (
    <div className='rede-social' style={{"backgroundColor": back, "color": color}}>
      <a href={link}>
            <div className='rede-social'>
                  {Name||"Algo"}
            </div>
      </a>
      <button onClick={()=>{DeleteDate(Name, link)}}>Delete</button>
    </div>
  )
}
