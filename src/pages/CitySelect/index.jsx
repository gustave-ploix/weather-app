import React, { useRef, useState } from 'react';
import './style.scss'

export default function CitySelect ({ setZip, zip }){

    const zipRegex = new RegExp(/[0-9]{5}/g)

    const [valid, setValid] = useState(true)

    const handleCange = (e) => {
        setZip(e.target.value)
    }
 
    const handleSubmit = (e) => {
        if (zipRegex.test(zip)) {
            console.log("ok");
            setValid(true)
        }else{
            e.preventDefault();
            console.log("nope");
            setValid(false)
        }
    }

    return(

        <form action={"/weather/" + zip} onSubmit={handleSubmit}>
            <input className={valid ? "": "nope"} onChange={handleCange} type="text" placeholder="ZIP code" />
            <p 
                className={valid ? "invisible" : "visible"}
            >Code postal non valide</p>
        </form>

    )

}