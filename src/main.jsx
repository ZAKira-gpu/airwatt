import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './i18n';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Suspense fallback={<div className="flex items-center justify-center h-screen bg-airwatt-dark text-white">Loading...</div>}>
                <App />
            </Suspense>
        </ErrorBoundary>
    </React.StrictMode>,
)
