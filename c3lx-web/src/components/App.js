import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import Header from "./Header";

const App = () => (
    <div>
        <Header/>
        <div className={"components"}>
            <Main />
        </div>
    </div>
)

export default App;
