import { Link } from "react-router-dom"

function Card({ data }) {
    const { title, image, id, category } = data;
    return (
        <div className="card">
            <Link to={`/${category}/${id}`}>
                <p>{title}</p>
                <img src={image}></img>
            </Link>
        </div>
    )
}

export default Card