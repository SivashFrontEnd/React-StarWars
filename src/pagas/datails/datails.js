import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { req, searchImg } from "../../method/method";
import "./details.css"



export default function Details ({url}) {
    const [information, setInformation] = useState({
        name : null,
        image: null,
        details : null
    }) 
    const { id } = useParams();

    useEffect(()=>{
        req(`${url}${id}`)
        .then((e) => {
            console.log(e);
            setInformation({
                name : e.name,
                image : searchImg(e.url).image,
                details : e
            })
        })
        .catch(()=>{})
    }, [])

    return (
        <div className="page">
            <div className="page-datails">
                <div className="datails-name">
                  {
                      information.name
                  }
                </div>
                <div className="datails-iamage">
                    <img src={information.image}></img>
                </div>
                <div className="datails-information">
                    {null}
                </div>
            </div>
        </div>
    )
}