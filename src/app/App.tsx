import { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar/ui';

import { AppRouter } from './providers/router';

import './styles/index.scss';


function App() {
    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar/>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>Lorem ipsum !</Modal>
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>  
                </div>
            </Suspense>
            
        </div>
    );
}

export default App;
