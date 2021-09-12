import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Step1 - Mount function to start the App
const mount = (el) => {
    ReactDOM.render(<App />, el)
}

// Step2 - if we are in development and in isolation call mount immediatly
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// Step3 - We are running through contianer and we should export the mount function 
export { mount };
