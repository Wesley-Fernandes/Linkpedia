import { collection, query, where, getDocs } from "firebase/firestore";
import { Database } from "../../Firebase/firebase";


export default async function Query(id){
    const userRef = collection(Database, "users");
    const consult = query(userRef, where("idStore", "==", id));
    const data = await getDocs(consult);

}
