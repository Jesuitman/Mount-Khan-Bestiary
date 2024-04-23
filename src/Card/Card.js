import "./Card.css"

function Card({title,description,id,deleteIdea,designation}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <h3>{designation}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Card