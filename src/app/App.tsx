import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { NavBar } from "widgets/NavBar"
import { Sidebar } from "widgets/Sidebar/ui"
import { AppRouter } from "./providers/router"
import './styles/index.scss'


function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>  
            </div>
        </div>
    )
}

export default App
