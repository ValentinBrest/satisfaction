import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { NavBar } from "widgets/NavBar"
import { AppRouter } from "./providers/router"
import './styles/index.scss'


function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>    
        </div>
    )
}

export default App
