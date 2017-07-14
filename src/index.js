import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';

import AppRouter from './components/AppRouter';

ReactDOM.render(
    <div>
        <AppRouter />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
