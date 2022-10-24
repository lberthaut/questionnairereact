import React from "react";

export default function Authentification (){
    return(
        <div className="auth_container">
            <label for="id">Identifiants de connexion</label>
            <input id="id"type="text"/>
            <label for="password">Mot de passe</label>
            <input id="password"type="text"/>
            <button type="submit">Connexion</button>
        </div>
    )
}