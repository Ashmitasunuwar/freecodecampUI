import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignInContextProvider } from './components/signInContext';

import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SignInContextProvider>
        <BrowserRouter>
            <App />

        </BrowserRouter>
    </SignInContextProvider>
);
