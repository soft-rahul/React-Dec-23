import React from "react";
import ReactDOM from 'react-dom/client';

const title = React.createElement('h1',null,'This is React!');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(title);