import React, { useEffect, useState } from 'react'
import { Authentify } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

export default function Private({children}) {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)
    const Navigate = useNavigate()
    
    useEffect(()=>{
        async function CheckLogin(){
            const unsub = onAuthStateChanged(Authentify, (user)=>{
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    };

                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false)
                    setSigned(true)
                }else{
                    setLoading(false);
                    setSigned(false);
                }
            })
        }


        CheckLogin()
    }, [])


    if(loading){
        return(
            <div>

            </div>
        )
    }

    if(!signed){
        Navigate("/login")
    }
  return children
}
