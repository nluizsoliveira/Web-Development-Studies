import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDolist from "./ToDolist"; //Importa componente todolist
// Dúvida: O index.html não chama o index.html, mas eles se comunicam mesmo assim. Padrão react?
var destination = document.querySelector("#container")  //HTMLElement que se refere ao #container

//ReactDOM possui 2 argumentos: Elemento html a ser inserido e HTMLElement onde tal elemento deve ser renderizado
ReactDOM.render(
    <div>
        <ToDolist/> 
    </div>,

    destination
)

