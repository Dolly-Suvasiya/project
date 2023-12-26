import React from "react";
import { Button } from "react-bootstrap";
import './Counter.css'

const Counter = (props) => {

    return (
        <>
            <span>{props.count}</span>
            <Button variant="danger" className="outline"
                onClick={() =>
                    props.setCount(props.count + 1)
                }
            >
                Increase
            </Button>
            {/* <Button variant="primary">Primary</Button> */}
            <Button variant="warning"
                onClick={() =>
                    props.setCount(props.count - 1)
                }
            >
                Decrease
            </Button>

        </>);
}
export default Counter