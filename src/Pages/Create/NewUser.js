import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {Authentify} from "../../Firebase/firebase"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NewDatabase from "./NewDatabase";

import { collection, doc, setDoc } from "firebase/firestore";
import {Database} from "../../Firebase/firebase"

export default function NewUser(email, password, Name){
    createUserWithEmailAndPassword(Authentify, email, password)
    .then(async (userCredential)=>{

            const id = userCredential.user.uid

            const docReference = collection(Database, "users")

            await setDoc(doc(docReference), {
                idStore: id, 
                Links: [{}],
                SocialNetworks: [{}],
                displayName: Name
            }).then(()=>{
                updateProfile(Authentify.currentUser,{
                    displayName: Name
                }).then(
                    toast.success("Conta criada com exito!"),
                    useNavigate("/admin")
                )
            
            })}

    )
}