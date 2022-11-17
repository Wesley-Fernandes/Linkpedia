import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Database } from "../../Firebase/firebase";
import { Authentify } from '../../Firebase/firebase'




import RedesSociais from './RedesSociais'
import Navbar from "./Navbar"
import Links from "./Links"



import "./style.css"
import { Link } from 'react-router-dom';

export default function Admin() {
  const [newtorks, setNetworks] = useState()
  const [Page,setPage] = useState("Links")
  const [AllLinks, setAllLinks] = useState()
  const [DOCID, setDOCID] = useState()
  const id = Authentify.currentUser.uid

  useEffect(()=>{
    async function Query(id){
      const userRef = collection(Database, "users");
      const consult = query(userRef, where("idStore", "==", id));
      const data = await getDocs(consult);
      
      setDOCID(data.docs[0].id);
      let data_links = []
      const datas = data.docs[0]._document.data.value.mapValue.fields;
      const alldatas = datas.Links.arrayValue.values;
      if(datas.Links.arrayValue !== null){
        datas.Links.arrayValue.values.map((info)=>{
          let item = {
            name: info.mapValue.fields.name.stringValue,
            cor1: info.mapValue.fields.cor1.stringValue,
            cor2: info.mapValue.fields.cor2.stringValue,
            link: info.mapValue.fields.link.stringValue
          }
          data_links.push(item)
        })
      }
    

      setAllLinks(data_links)
      setNetworks(datas.SocialNetworks.arrayValue.values)
    }
      
    

    Query(id)
    console.log(id);

  }, [])

  
  return (
    <div className='Admin-Page'>
      <div className='Centralizer'>
        <Navbar setPage={setPage}/>

      {Page==="Links"&&(<Links AllLinks={AllLinks} setAllLinks={setAllLinks} DOCID={DOCID} />)}
      {Page==="Sociais"&&(<RedesSociais DOCID={id}  />)}
      </div>
    </div>
  )
}
