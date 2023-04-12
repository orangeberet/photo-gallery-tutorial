import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
const container = document.getElementById('root');
const root = createRoot(container!);
ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://cra.link/PWA
