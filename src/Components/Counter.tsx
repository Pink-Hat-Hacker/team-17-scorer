import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [counter, setCount] = useState<number>(0);

    function addCount(): void {
        setCount(counter + 1);
    }
    function decreaseCount(): void {
        setCount(counter - 1);
    }
    return (
        <div>
            <div>Counter = {counter}</div>
            <Button onClick={addCount}>Increase</Button>
            <Button onClick={decreaseCount}>Decrease</Button>
        </div>
    );
}
