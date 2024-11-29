import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NavBar } from '@/widgets/NavBar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <div className="app">
            <Suspense fallback="">
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                    <NavBar />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
