import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Logo from '../../Components/Logo'
import { toast } from "react-toastify";
import "./style.css"
import NewUser from './NewUser';

export default function Create() {
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Pass, setPass] = useState()
  const [VPass, setVPass] = useState()

  async function tryCreate(e){
    e.preventDefault()

    if (!Name){
      toast.error("É necessario definir nome!")
      return
    }

    if (!Email){
      toast.error("É necessario definir um e-mail!")
      return
    }

    if (!Pass){
      toast.error("É necessario definir uma senha!")
      return
    }

    if (!VPass){
      toast.error("É necessario verificar sua senha!")
      return
    }

    if (Pass!=VPass){
      toast.error("Senha e verificação de senha não coincidem!")
      return
    }

    NewUser(Email, Pass, Name)

  }


  return (
    <div className='CreatePage'>
      <div className='CreateForm'>
        <form onSubmit={(e)=>{tryCreate(e)}}>
          <Logo/>
          <p>Criando a sua conta</p>
          <hr></hr>
          <Input type="text" key="name" place="Digite o seu nome de usúario." changer={setName} />
          <Input type="email" key="email" place="Digite o seu e-mail." changer={setEmail} />
          <Input type="password" key="password" place="Digite a sua senha." changer={setPass} />
          <Input type="password" key="verifypassword" place="Verifique a sua senha." changer={setVPass} />
          <Button text="Criar uma nova conta"/>
        </form>
      </div>
    </div>
  )
}
