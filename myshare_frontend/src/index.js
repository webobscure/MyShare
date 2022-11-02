import React from 'react';
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
        <Router >
        <App tab = "home" />
    </Router>
    </GoogleOAuthProvider>
    
)