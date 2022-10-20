
//     access data using axios and useEffect hook


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiNew = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {

        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

        // resp.data.map((val) => {
        //     console.log(val.id, val.name, val.email)
        // })

        setData(resp.data)
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <>
            {/* <button onClick={loadData}>Click here</button> */}

            <table border={1} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

                {
                    data.map((cval) => {
                        return (
                            <>
                                <tr>
                                    <td>{cval.id}</td>
                                    <td>{cval.name}</td>
                                    <td>{cval.email}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default ApiNew