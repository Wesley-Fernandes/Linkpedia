import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Components/Logo'
import "./erro.css"
export default function Error() {

  return (
    <div className='erro-page'>
        <Logo/>
        <h1><span>Erro 404:</span> Página não encontrada!</h1>
        <hr/>
        <p>A página selecionada não existe.</p>
        <div className='links'>
          <Link to="/" className='link'>
            Voltar para a pagina inicial
          </Link>
        </div>
    </div>
  )
}
