import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [counter, setCount] = useState<number>(0);

    function addOne(): void {
        setCount(counter + 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <Button onClick={addOne}>Test</Button>
        </div>
    );
}
