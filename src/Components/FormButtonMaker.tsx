import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function FormButtonMaker(): JSX.Element {
    const [title, setTitle] = useState<string>("Make New Button");
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => setButtonClicked(!buttonClicked)}>
                {title}
            </Button>
            {buttonClicked && (
                <Form.Group>
                    <Form.Control
                        type="string"
                        value={title}
                        disabled={!buttonClicked}
                        onChange={(event: ChangeEvent) =>
                            setTitle(event.target.value)
                        }
                    />
                </Form.Group>
            )}
        </div>
    );
}
