import React from "react"
import { useState, useEffect } from 'react'


const Api = () => {

    const [data, setData] = useState([]);

    async function getData() {

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const mainData = await res.json();
        setData(mainData)
    }


    useEffect(() => {
        getData();
    }, [])


    return (

        <>
            <table border={1} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>

                {
                    data.map((cval) => {
                        return (
                            <>
                                <tr>
                                    <td> {cval.id}</td>
                                    <td> {cval.name}</td>
                                    <td> {cval.email}</td>
                                    <td> {cval.address.street}, {cval.address.suite}
                                        , {cval.address.city} {cval.address.zipcode}
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Api