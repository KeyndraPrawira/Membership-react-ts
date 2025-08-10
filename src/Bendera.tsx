import React from "react";



function Flag(
    {code,name, format = 'png'} : {code:string, name:string, format?: string}) {

    const countryCode = code.toLowerCase();
    const url = `https://flagcdn.com/16x12/${countryCode}.${format}`

    return <img src={url} alt={`Flag ${countryCode}`} />

}

export default Flag;