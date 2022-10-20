
//     Use of props to send data from parent to chield


import React from 'react'
import { useState } from 'react';

const About = (props) => {

    const [age, setAge] = useState()

    return (
        <>
            <h2>Name:  {props.name} </h2>
            <Details city='Pune' getAge={setAge} />
            <h2>Age:   {age}</h2>
        </>
    )
}


const Details = ({ city, getAge }) => {

    const myAge = 20;
    getAge(myAge)

    return (
        <>
            <h2>City:  {city}</h2>

        </>
    )
}

export default About