import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function MultipleCounters(): JSX.Element {
    const [state, setCounter] = useState({
        counterA: 0,
        counterB: 0,
        counterC: 0
    });

    return (
        <div>
            <div>
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
