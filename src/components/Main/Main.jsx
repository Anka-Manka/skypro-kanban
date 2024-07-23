import Column from "../Column/Column"

function Main({ cards, isLoading }) {
    return (
        <main className="main">
            <div className="container">

                <div className="main__block">
                    {isLoading ? 'Данные загружаются' : (
                        <div className="main__content">
                            <Column status={'Без статуса'} cards={cards.filter((el) => el.status === 'Без статуса')}/>
                            <Column status={'Нужно сделать'} cards={cards.filter((el) => el.status === 'Нужно сделать')}/>
                            <Column status={'В работе'} cards={cards.filter((el) => el.status === 'В работе')}/>
                            <Column status={'Тестирование'} cards={cards.filter((el) => el.status === 'Тестирование')}/>
                            <Column status={'Готово'} cards={cards.filter((el) => el.status === 'Готово')}/>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Main
