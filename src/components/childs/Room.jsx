import { useState } from "react";
import Counter from "./Counter";
import './Room.css';

const Room = () => {
    const [isLit, setLit] = useState(true);
    let brightness = isLit ? "light" : "dark"

    return (
        <div className="states">
            <h1 id="title">State Examples</h1>
            <Counter />
            <div className={`box room ${brightness}`}>
                <h2>Hey! the room is <strong> {isLit ? "Lit" : "Dark"}</strong>.</h2>
                <button onClick={() => setLit(!isLit)}>{isLit ? "Off" : "On"}</button>
            </div>
        </div>
    )
};

export default Room;