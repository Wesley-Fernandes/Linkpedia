import React from 'react'
import { Link } from 'react-router-dom'
import "./logo.css"
export default function Logo() {
  return (
    <Link to="/login">
      <h1 className='logo-component'>
        Link
        <span className='yellow'>
          Pedia
        </span>
      </h1>
    </Link>
  )
}
