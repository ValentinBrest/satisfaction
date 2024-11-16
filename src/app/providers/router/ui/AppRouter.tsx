import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = <>{route.element}</>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{el}</RequireAuth>
                    ) : (
                        el
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{routeConfig.map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
