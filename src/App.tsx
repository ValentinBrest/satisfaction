import { Suspense, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Theme } from "./theme/ThemeContext"


function App() {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
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
