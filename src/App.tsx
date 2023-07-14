import './assets/scss/app.scss'
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <Pizza type="Чизбургер-пицца" price={399}/>
                        <Pizza type="Пеперони" price={349}/>
                        <Pizza type="Гавайская" price={449}/>
                        <Pizza type="Маргарита" price={299}/>
                        <Pizza type="Пеперони" price={349}/>
                        <Pizza type="Пеперони" price={349}/>
                        <Pizza type="Пеперони" price={349}/>
                        <Pizza type="Пеперони" price={349}/>
                        <Pizza type="Пеперони" price={349}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
