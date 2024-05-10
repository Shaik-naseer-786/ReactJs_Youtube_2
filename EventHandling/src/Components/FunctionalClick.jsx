import React from 'react'

function FunctionalClick(props) {
    
    function clickHandler(){
        console.log("button clicked!")
    }

    return (
        <>
            <div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </>
    )
}
export default FunctionalClick;