import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter({
    label,
    initialCount
}: {
    label: string;
    initialCount: number;
}): JSX.Element {
    const [counter, setCount] = useState<number>(initialCount);
    function addCount(): void {
        setCount(counter + 1);
    }
    function decreaseCount(): void {
        setCount(counter - 1);
    }
    return (
        <div>
            <div>
                {label}: Counter = {counter}
            </div>
            <Button onClick={addCount}>Increase</Button>
            <Button onClick={decreaseCount}>Decrease</Button>
        </div>
    );
}
