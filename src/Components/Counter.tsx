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
    const [visible, setVisible] = useState<boolean>(true);
    function resetCounter() {
        setCount(initialCount);
    }
    function addCount(): void {
        setCount(counter + 1);
    }
    function decreaseCount(): void {
        setCount(counter - 1);
    }
    function ShowHide() {
        setVisible(!visible);
    }
    return (
        <div>
            {visible && (
                <div>
                    <div>
                        {label}: Counter = {counter}
                    </div>
                    <Button onClick={addCount}>Increase</Button>
                    <Button onClick={decreaseCount}>Decrease</Button>
                    <Button onClick={resetCounter}>Reset Counter</Button>
                    <Button onClick={ShowHide}>Delete Counter</Button>
                </div>
            )}
        </div>
    );
}
