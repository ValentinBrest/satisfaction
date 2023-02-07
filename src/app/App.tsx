import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { classNames } from "helpers/classNames/classNames"
import { AboutPageAsync } from "pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "pages/MainPage/MainPage.async"
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider"


function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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
