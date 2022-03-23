import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Counter } from "./Components/Counter";
import { MultipleCounters } from "./Components/MultiCounters";

function App(): JSX.Element {
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [state, setCounter] = useState({
        counterA: 0,
        counterB: 0,
        counterC: 0
    });

    function decreaseScore() {
        setCurrentScore(currentScore - 1);
    }

    function increaseScore() {
        setCurrentScore(currentScore + 1);
    }

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
