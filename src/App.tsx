import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"

function App() {
    return (
        <div className="app light">
            <Link to="/about">О сайте</Link>
            <Link to="/main">Главная</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                    <Route path='/main' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
                
        </div>
    )
}

export default App
