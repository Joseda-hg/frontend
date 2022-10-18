import React from "react";

import { Card } from "./Card";

export function Totem() {
    return (<>
        <h1 id="PageTitle">Totem de Autoatencion</h1>
        {/* <button><i></i></button> */}
        <i href="/" className="fa-regular fa-cart-shopping" id="shoppingCart"> </i>
        <select name="Seleccione su mesa" id="">
            <option value="">Mesa 1</option>
            <option value="">Mesa 2</option>
            <option value="">Mesa 3</option>
            <option value="">Mesa 4</option>
        </select>

        <br></br>
        <br></br>
        
        <Card />

        <Card />

        <Card />

        <Card />

<button className="btn btn-primary"> Finalizar Pedido </button>
    </>
    );
}
