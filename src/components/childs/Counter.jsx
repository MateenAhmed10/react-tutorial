import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    const decrement = (prevCount) => {
        setCount(count - 1)
    };

    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="box">
            <h2>Counter</h2>
            <div className="counter">
                <button
                    className="decrease"
                    onClick={decrement}
                >
                    -
                </button>
                <p className={`${count > 0 ? "green" : "red"}`}>{count}</p>
                <button className="increase" onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;