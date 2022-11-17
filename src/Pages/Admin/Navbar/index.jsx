import React from 'react'
import {ImExit} from "react-icons/im"
import Exit from '../Exit'
export default function index({setPage}) {
  return (
    <header className='header'>
        <ImExit onClick={Exit}/>
        <span onClick={()=>{setPage("Links")}}>Links</span>
        <span onClick={()=>{setPage("Sociais")}}>Redes sociais</span>
    </header>
  )
}
