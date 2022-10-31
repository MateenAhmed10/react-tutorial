import React from 'react'

function Gate() {
    let isOpen = true;
    return (
        <div className='box'>
            <h2>
                Gate is {isOpen ? "Open!" : "Closed!"}
            </h2>
        </div>
    )
}

export default Gate