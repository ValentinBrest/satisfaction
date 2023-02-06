import { Link, Route, Routes } from "react-router-dom"
import './index.scss'
import AboutPage from "./pages/AboutPage/AboutPage"
import MainPage from "./pages/MainPage/MainPage"

function App() {
    return (
        <div className="app">
            <Link to="/about">О сайте</Link>
            <Link to="/main">Главная</Link>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                </Routes>
        </div>
    )
}

export default App
