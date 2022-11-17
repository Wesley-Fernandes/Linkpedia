import { doc, setDoc } from "firebase/firestore";
import {Database} from "../../Firebase/firebase"

export default async function NewDatabase(id){
    await setDoc(doc(Database, "users"), {
        idStore: id, 
        Links: [{}],
        SocialNetworks: [{}]
    })
}