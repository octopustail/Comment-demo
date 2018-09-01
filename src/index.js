import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from "./CommentApp";

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
