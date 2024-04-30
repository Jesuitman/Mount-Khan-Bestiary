import "./Card.css"

function Card({title,description,id,deleteIdea,designation,otherDetail,otherDetail2}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <h3>{designation}</h3>
            <h3>{otherDetail2}</h3>
            <p>{description}</p>
            <h3>{otherDetail}</h3>
        </div>
    )
}

export default Card