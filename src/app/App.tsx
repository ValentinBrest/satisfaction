import { useTheme } from "app/providers/ThemeProvider"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { NavBar } from "widgets/NavBar"
import { Sidebar } from "widgets/Sidebar/ui"
import { AppRouter } from "./providers/router"
import './styles/index.scss'


const Component = () => {
    const { t, i18n } = useTranslation();

    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru': 'en')
    }

    return (
        <div>
            <button onClick={toggleLng}>{t('Перевод')}</button>
            {t('Тестовый пример')}
        </div>
    )
}

function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Component/>
                <NavBar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>  
                </div>
            </Suspense>
            
        </div>
    )
}

export default App
