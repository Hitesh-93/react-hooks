import React from 'react'
import { useState } from 'react';


const Count = () => {

    const [count, setCount] = useState(0);

    // let count = 0;

    function counting() {

        setCount(count + 1);

        // alert(count++);
    }

    return (

        <>
            <h2>{count} time count</h2>
            <button onClick={counting}>Click for count</button>
        </>

    )
}

export default Count