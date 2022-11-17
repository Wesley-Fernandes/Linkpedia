import React, { useEffect } from 'react'
import "./style.css"
export default function Input({changer, place, type, auto, variavel}) {
  useEffect(()=>{
    console.log(variavel);
  }, [variavel])
  return (
    <input
        className='inputs'
        onChange={(e)=>{changer(e.target.value)}}
        autoComplete={auto}
        type={type}
        placeholder={place}
    />
  )
}
