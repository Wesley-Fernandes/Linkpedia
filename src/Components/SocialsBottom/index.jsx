import React, { useEffect } from 'react'
import "./style.css"
import {FaLinkedin,FaWhatsappSquare, FaFacebookSquare} from "react-icons/fa"
export default function SocialsBottom({redes}) {
 
  console.log(redes);
  return (
    <div className='social-networks-hud'>
        <div className='social-networks'>
          {redes &&(

            redes.Linkdin.stringValue!="undefined" &&(
              <a target={'_blank'} href={redes.Linkdin.stringValue}>
              <FaLinkedin/>
              </a>
            )
          )}

          {redes &&(

          redes.WhatsApp.stringValue!="undefined" &&(
            <a target={'_blank'} href={redes.WhatsApp.stringValue}>
            <FaWhatsappSquare/>
            </a>
          )
          )}
         



          {redes &&(

          redes.Facebook.stringValue!="undefined" &&(
            <a target={'_blank'}  href={redes.Linkdin.stringValue}>
            <FaFacebookSquare/>
            </a>
          )
          )}
        

        </div>
  </div>
  )
}
