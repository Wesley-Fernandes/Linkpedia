import React, { useEffect, useState } from 'react'
import { doc, updateDoc, query, where, collection } from "firebase/firestore";
import "./style.css"


import Button from '../../../Components/Button'
import Input from '../../../Components/Input'
import Logo from '../../../Components/Logo'
import Item from "../../../Components/Social/Item"
import { Database } from '../../../Firebase/firebase';
import { toast } from 'react-toastify';

export default function Links({AllLinks, setAllLinks, DOCID, newtorks}) {
  const [nome, setNome] = useState()
  const [link, setLink] = useState()
  const [background, setBackground] = useState()
  const [color, setColor] = useState("")

  async function UpdateDates(){
    console.log("clickado");

      if(color==undefined || color==""){
        toast.error("Defina a cor do texto!")
        return
      }

      if(background==undefined || background==""){
          toast.error("Defina a cor do background!")
          return
      }


      


      const dataRef = doc(Database, "users", DOCID)

      
      let that_link = {
        
          name: nome,
          cor1: background,
          cor2: color,
          link: link
        
      }

      let data_links = []

      console.log(AllLinks);

      if (AllLinks!=undefined){
        AllLinks.map((Response)=>{
          let item = {
            name: Response.name,
            cor1: Response.cor1,
            cor2: Response.cor2,
            link: Response.link
          }
  
          data_links.push(item)
  
        })

      }

      data_links.push(that_link)


      await updateDoc(dataRef, {
        Links: data_links
    
      })

      setAllLinks(data_links)

      toast.success("Dados atualizados com sucesso!")
    }

  async function DeleteDate(name, link){
    const dataRef = doc(Database, "users", DOCID)
    const newData = AllLinks.filter((item)=> item.link!=link);
    await updateDoc(dataRef, {
      Links: newData
  
    })
    setAllLinks(newData)
    toast.success("Link excluido com sucesso!")
  }



  
  return (
    <>
        <Logo/>
      
        <Input place={"Nome do Jumper"} changer={setNome} variavel={nome}/>
        <Input place={"Link do Jumper"} changer={setLink} />
        <div className='ColorComponents'>
          <div className='separator'>
            <span>Cor do texto</span>
            <div className='color-box'>
              <Input type={"color"} changer={setBackground} />
             </div>
          </div>
          <div className='separator'>
            <span>Cor do background</span>
            <div className='color-box'>
              <Input type={"color"} variavel={color} changer={setColor}/>
             </div>
          </div>



          
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          UpdateDates()
          }}>
          <Button text="Adicionar" />
        </form>
        <main>
          <h2>Meus Links</h2>
          <div className='Links'>
              {AllLinks!=undefined &&(
              AllLinks?.map((item, index)=>{
                return(
                <Item
                  key={index}
                  Name={item.name}
                  back={item.cor2}
                  color={item.cor1}
                  link={item.link}
                  DeleteDate={DeleteDate}
                  
                />)
                
              }))}


            
              
          

          </div>
        </main>
    </>
  )
}
