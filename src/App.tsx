import React from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { FormButtonMaker } from "./Components/FormButtonMaker";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>Welcome to Score Counter!</div>
            <Counter label="Custom Label" initialCount={0}></Counter>
            <Counter label="Custom Lable 1" initialCount={0}></Counter>
            <Counter label="Custom Lable 2" initialCount={0}></Counter>
            <Counter label="Custom Lable 3" initialCount={0}></Counter>
            <FormButtonMaker></FormButtonMaker>
            <footer>Team 17</footer>
        </div>
    );
}

export default App;
