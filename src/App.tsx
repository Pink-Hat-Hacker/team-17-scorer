import React from "react";
import "./App.css";
import { Counter } from "./Components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>Welcome to Score Counter!</div>
            <Counter></Counter>
            <p>Team 17</p>
        </div>
    );
}

export default App;
