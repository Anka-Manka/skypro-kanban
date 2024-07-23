import React, {useEffect, useState} from "react"
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import { cardList } from "./data.js"


function App() {
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] = useState(false)

    const addCard = (e) => {
        e.preventDefault()
        const newCard = {
            id: cards[cards.length - 1].id + 1,
            topic: 'Copywriting',
            title: 'Название задачи',
            date: '30.10.23',
            status: 'Без статуса',
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <div className="wrapper">
                {/*<!--pop - up start-->*/}
                <PopExit/>
                <PopNewCard/>
                <PopBrowse/>

                {/*<!-- pop-up end-->*/}

                <Header addCard = {addCard}/>
                <Main isLoading={isLoading} cards = {cards}/>

            </div>

        </>
    )
}

export default App
