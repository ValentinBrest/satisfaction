import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"


function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/about">О сайте</Link>
            <Link to="/main">Главная</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                </Routes>
            </Suspense>
                
        </div>
    )
}

export default App
