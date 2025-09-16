
import React, { useState } from "react";

export const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleSumbit = (e) => {
    alert("Formulario enviado");
    e.preventDefault();
  setNombre("");
  setEmail("");
  setPassword("");
}

    return (
        <>
        <form onSubmit={handleSumbit}>
            <input type="text" placeholder="Escribe tu nombre" value={nombre}
            onChange={(e)=>setNombre(e.target.value)} />

            <input type="email" placeholder="Escribe tu email" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
           <input type="password" placeholder="Escribe tu contraseña"
            value ={password}  onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" value={"Enviar"}>Enviar</button>
        </form>
        </>
    )
}