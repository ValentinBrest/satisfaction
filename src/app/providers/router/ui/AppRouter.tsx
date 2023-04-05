import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader';

import { routeConfig } from '../routeConfig/routeConfig';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return routeConfig.filter(route => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        } );
    }, [isAuth]);

    return ( 
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route 
                        key={path} 
                        path={path} 
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);

