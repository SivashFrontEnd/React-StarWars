import { createValidArray } from "../../method/method"
import Card from "./card"
import "./card.css"

function Cards({ data }) {
    const newArr = createValidArray(data)
    return (
        <div className="cards">
            {
                newArr ? newArr.map((e, i) => {
                    return <Card key={i * 10 + Math.random()} data={e}></Card>
                }) : newArr
            }
        </div>
    )
}




export default Cards