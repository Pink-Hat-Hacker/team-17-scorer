import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function MultipleCounters(): JSX.Element {
    const [state, setCounter] = useState({
        counterA: 0,
        counterB: 0,
        counterC: 0
    });
    const [visibleButton1, setVisibility1] = useState<boolean>(true);
    const [visibleButton2, setVisibility2] = useState<boolean>(true);
    const [visibleButton3, setVisibility3] = useState<boolean>(true);

    return (
        <div>
            {visibleButton1 && (
                <div>
                    <Button
                        onClick={() =>
                            setCounter({
                                ...state,
                                counterA: state.counterA + 1
                            })
                        }
                    >
                        <span>Custom A</span>
                    </Button>
                    <Button onClick={() => setVisibility1(false)}>
                        Delete
                    </Button>
                    <div>Counter = {state.counterA}</div>
                </div>
            )}
            {visibleButton2 && (
                <div>
                    <Button
                        onClick={() =>
                            setCounter({
                                ...state,
                                counterB: state.counterB + 1
                            })
                        }
                    >
                        <span>Custom B</span>
                    </Button>
                    <Button onClick={() => setVisibility2(false)}>
                        Delete
                    </Button>
                    <div>Counter = {state.counterB}</div>
                </div>
            )}
            {visibleButton3 && (
                <div>
                    <Button
                        onClick={() =>
                            setCounter({
                                ...state,
                                counterC: state.counterC + 1
                            })
                        }
                    >
                        <span>Custom C</span>
                    </Button>
                    <Button onClick={() => setVisibility3(false)}>
                        Delete
                    </Button>
                    <div>Counter = {state.counterC}</div>
                </div>
            )}
        </div>
    );
}
