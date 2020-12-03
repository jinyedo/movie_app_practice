import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './component/Navigation';
import Detail from './routes/Detail';

function App() {
    return(
        // Route에는 2가지 props가 필요
        // 1. 렌더링할 스크린 = path
        // 2. 어떤것을 할지 = component
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
        </HashRouter>
    );
}

export default App;
