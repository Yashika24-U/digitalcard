import React from "react"
import model from "../model.jpg"


export default function Photo()
{
    return(
        <div>
            <img className="head--img" src = {model} alt = "model"/>
        </div>
    )
}