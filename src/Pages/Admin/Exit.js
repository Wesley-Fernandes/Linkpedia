import { signOut } from "firebase/auth";
import { Authentify } from "../../Firebase/firebase";

export default function Exit(){
    signOut(Authentify).then((response)=>{
        console.log(response);
    })
}
