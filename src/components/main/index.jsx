import { useState, useEffect } from "react";
import { req, showName } from "../../method/method"

export default function Main() {
    const [exchangeName, setExchangeName] = useState(null);


    // let u = null
    useEffect(() => {
        const data = req("https://swapi.dev/api/people/");
        data.then(function (info) {
            setExchangeName(showName(info))
        })
    }, [])

    console.log(exchangeName);
    return (
        <>
            <ul>
                {
                    exchangeName
                }
            </ul>
        </>
    )
}

