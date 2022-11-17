import React, { useEffect } from 'react'
import "./style.css"
import ItemOff from "./Itemoff"
import SocialsBottom from '../SocialsBottom'
export default function index({jumpers, redes}) {

  return (
    <div className='redes-sociais'>
      {
        jumpers &&(
          jumpers.map((item, index)=>(
            <ItemOff
            key={index}
            Name={item.mapValue.fields.name.stringValue}
            color={item.mapValue.fields.cor1.stringValue}
            back={item.mapValue.fields.cor2.stringValue}
            link={item.mapValue.fields.link.stringValue}
            />
          ))
        )
      }

        <SocialsBottom redes={redes}/>
    </div>
  )
}
