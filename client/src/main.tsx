import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ZenStackProvider } from './hooks/index.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ZenStackProvider
                value={{
                    endpoint:
                        import.meta.env.VITE_API_ENDPOINT ??
                        'http://localhost:3000/api/model',
                }}
            >
                <App />
            </ZenStackProvider>
        </QueryClientProvider>
    </StrictMode>
);
