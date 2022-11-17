import React, { useState } from "react";
import Button from "../../../Components/Button";
import { Database } from "../../../Firebase/firebase";
import Input from "../../../Components/Input";
import { doc, updateDoc, query, where, collection } from "firebase/firestore";
import { toast } from "react-toastify";

export default function RedesSociais({ DOCID }) {
  const [LK, setLK] = useState();
  const [WP, setWP] = useState();
  const [FB, setFB] = useState();
  const url = location.href;
  const url_split = url.split("admin");
  console.log(url_split);

  async function Save() {
    const dataRef = doc(Database, "users", DOCID);

    toast.success("Redes sociais foram salvas!");

    await updateDoc(dataRef, {
      SocialNetworks: [
        {
          WhatsApp: WP || "undefined",
          Linkdin: LK || "undefined",
          Facebook: FB || "undefined",
        },
      ],
    });

  }
  return (
    <>
      <Input place={"Link para seu perfil Linkedin"} changer={setLK} />
      <Input place={"Link para seu perfil Facebook"} changer={setFB} />
      <Input place={"Numéro whatsapp, exemplo: 53991283952"} changer={setWP} />
      <p style={{ color: "#fff", margin: "1rem" }}>
        <strong
          style={{ background: "red", padding: "0.5rem", borderRadius: "10px" }}
        >
          MEU URL:
        </strong>
        <a
          target={"_blank"}
          style={{ color: "white" }}
          href={`${url_split[0]}?user=${DOCID}`}
        >{`${url_split[0]}?user=${DOCID}`}</a>
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Save();
        }}
      >
        <Button onClick={Save} text={"Salvar redes sociais"} />
      </form>
    </>
  );
}
