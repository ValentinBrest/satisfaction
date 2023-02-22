import { Suspense } from 'react';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar/ui';

import { AppRouter } from './providers/router';

function App() {

    return (
        <div className="app">
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
