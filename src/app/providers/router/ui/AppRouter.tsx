import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/main' element={<MainPage/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRouter
