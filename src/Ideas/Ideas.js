import Card from "../Card/Card"
import "./Ideas.css"

function Ideas({ideas,deleteIdea}){
    const ideaCards = ideas.map(idea=>{
        return(
            <Card
            title={idea.title}
            description={idea.description}
            designation={idea.designation}
            otherDetail = {idea.otherDetail}
            otherDetail2 = {idea.otherDetail2}
            id={idea.id}
            key={idea.id}
            deleteIdea={deleteIdea}
            />
        )
    })

    return(
        <div className="ideas-container">
            {ideaCards}
        </div>
    )
}

export default Ideas