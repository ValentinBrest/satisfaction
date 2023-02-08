import { useTheme } from "app/providers/ThemeProvider"
import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/router"
import './styles/index.scss'


function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/about">О сайте</Link>
            <Link to="/">Главная</Link>
            <AppRouter/>    
        </div>
    )
}

export default App
