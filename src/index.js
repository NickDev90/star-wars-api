import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store/store';
import { ThemeProvider } from './context/ThemeProvider';

import App from './App';
import { REPO_NAME } from './constants/baseName';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter basename={REPO_NAME}>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>


);
