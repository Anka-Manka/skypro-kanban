import Card from "../Card/Card"

function Column({ title }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>

            <div className="cards">
                <Card title={'Web Design'} color={'_orange'}/>
                <Card title={'Research'} color={'_green'}/>
                <Card title={'Web Design'} color={'_orange'}/>
                <Card title={'Copywriting'} color={'_purple'}/>
                <Card title={'Research'} color={'_green'}/>
            </div>
        </div>
    )
}

export default Column
