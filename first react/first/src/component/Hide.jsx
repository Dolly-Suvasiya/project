import { useState } from "react";

function Hide() {
    const [hideText, setHideText] = useState(false);

    const onClick = () => setHideText(!hideText);

    return (
        <div>
            <button onClick={onClick}>Click me</button>
            {hideText ? <Text /> : null}
        </div>
    );
}

const Text = () => <div>I will disappear, true Magic</div>;
export default Hide;
