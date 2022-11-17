import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Social from "../../Components/Social"
import "./style.css"
import Logo from "../../Components/Logo"
import Socials from '../../Components/SocialsBottom'
import { Database } from '../../Firebase/firebase'
import { query, where, collection, getDocs } from 'firebase/firestore'

export default function Home() {
  const [user, setUser] = useState()
  const [redes, setRedes] = useState()
  const [jumpers, setJumpers] = useState()




  useEffect(()=>{
    //http://localhost:5173/?user=qjN2n6d18Dh9fiYloj02lPc2S5W2
    const fullURL = window.location.href
    const partsURL = fullURL.split("=")

    async function getData(){
      const userRef = collection(Database, "users");
      const consult = query(userRef, where("idStore", "==", partsURL[1]));
      const data = await getDocs(consult);
      const importantData = data.docs[0]._document.data.value.mapValue.fields;
      setUser(importantData.displayName.stringValue);
      setJumpers(importantData.Links.arrayValue.values)
      setRedes(importantData.SocialNetworks.arrayValue.values[0].mapValue.fields);

    }

    getData()
  }, [])
  return (
    <div className='Home-page'>
      <Logo/>
      <h1 className='username'>{user||"Sem usuario"}</h1>
      {user?(<p>Siga minhas redes sociais abaixo!</p>):(<p>Você invalido ou conta desativada!</p>)}
      <hr />
      <Social jumpers={jumpers} redes={redes}/>

    </div>
  )
}
