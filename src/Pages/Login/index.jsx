import React, { useEffect, useState } from "react";
import Logo from "../../Components/Logo";
import { Authentify } from "../../Firebase/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";
import { toast } from "react-toastify";
import Input from "../../Components/Input";
import Button from "../../Components/Button";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true)
  const [signed, setSigned] = useState(false)

  const Navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(Authentify, (user) =>{
      if(user){
        Navigate("/admin")
      }
    }, [])
  })
  async function Login(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error(`Preencha todos os campos.`);
      return;
    }

    if(email.length<5 || password.length <5){
      toast.error(`E-mail e senha precisam ter mais de 5 caracteres.`);
      return
    }

    signInWithEmailAndPassword(Authentify, email, password)
      .then((response) => {
        toast.success(
          `Bem vindo de volta ${response.user.displayName || "Usuário"}!`
        );
        Navigate("/admin", { replace: true });
        console.log(response);
      })
      .catch((error) => {
        toast.error(`Erro ao fazer login: ${error}`);
        Alert(error);
      });
  }

  return (
    <div className="login-page">
      <Logo />
      <form className="form-login" onSubmit={Login}>
        
        <Input
          auto="on"
          changer={setEmail}
          place="Digite o seu e-mail"
          type="email"
          key="email"
        />

        <Input
          auto="on"
          changer={setPassword}
          place="*******"
          type="password"
          key="password"
        />

        <Button text={"Acessar"} key="ButtonAcess"/>
        <hr />
        <Link to="/create" className="footer">
          <span>Não tem conta? Crie uma agora!</span>
        </Link>
      </form>
    </div>
  );
}
