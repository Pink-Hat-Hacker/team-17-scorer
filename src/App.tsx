import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

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
            <h3> C and E </h3>
            <div>
                <Button onClick={increaseScore}>Increase Score</Button>
                <Button onClick={decreaseScore}>Decrease Score</Button>
                <div>Current Score = {currentScore}</div>
            </div>
            <br></br>
            <h3> D </h3>
            <div>
                {/* button A */}
                <Button
                    onClick={() =>
                        setCounter({ ...state, counterA: state.counterA + 1 })
                    }
                >
                    <span>Custom A</span>
                </Button>
                <div>Counter = {state.counterA}</div>
            </div>
            <div>
                {/* button B */}
                <Button
                    onClick={() =>
                        setCounter({ ...state, counterB: state.counterB + 1 })
                    }
                >
                    <span>Custom B</span>
                </Button>
                <div>Counter = {state.counterB}</div>
            </div>
            <div>
                {/* button C */}
                <Button
                    onClick={() =>
                        setCounter({ ...state, counterC: state.counterC + 1 })
                    }
                >
                    <span>Custom C</span>
                </Button>
                <div>Counter = {state.counterC}</div>
            </div>
        </div>
    );
}

export default App;
