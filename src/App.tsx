import React from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { MultipleCounters } from "./Components/MultiCounters";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>Welcome to Score Counter!</div>
            <p>Task C and E</p>
            <Counter></Counter>
            <p>Task D</p>
            <MultipleCounters></MultipleCounters>
            <p>Team 17</p>
        </div>
    );
}

export default App;
