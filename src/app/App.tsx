import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar/ui';

import { AppRouter } from './providers/router';



function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar/>
                
                
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>  
                </div>
            </Suspense>
            
        </div>
    );
}

export default App;
