import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import '@/shared/config/i18n/i18n';

import App from './app/App';

import '@/app/styles/index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
