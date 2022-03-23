import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    const [currentScore, setCurrentScore] = useState<number>(0);

    function decreaseScore() {
        setCurrentScore(currentScore - 1);
    }

    return (
        <div className="App">
            <Button onClick={decreaseScore}>Decrease Score</Button>
            <div>{currentScore}</div>
        </div>
    );
}

export default App;
