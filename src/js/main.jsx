import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Home counter={counter++} />
        </React.StrictMode>
    );
}, 1000);