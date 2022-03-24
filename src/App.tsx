import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Counter } from "./Components/Counter";
import { FormButtonMaker } from "./Components/FormButtonMaker";
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
            <br></br>
            <p>Task F</p>
            <FormButtonMaker></FormButtonMaker>
            <p>Team 17</p>
        </div>
    );
}

export default App;
