
import './CronologiaPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

export default function CronologiaPage(){
    const [Personaje, PonerPersonaje] = useState([]);
    const [Orden, PonerOrden ] =useState(true);
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/characters/"
            )
            console.log(data)
            PonerPersonaje(data);
            
        }
        getData();
        
        
    }, [])

    return(
        <h1>Hola</h1>
    )
}