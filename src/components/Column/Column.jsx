import Card from "../Card/Card"

function Column({ status, cards }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{status}</p>
            </div>

            <div className="cards">
                {cards.map((el) => <Card key = {el.id} topic = {el.topic} date = {el.date} title={el.title}/>)}
            </div>
        </div>
    )
}

export default Column
