import React, { useEffect, useState } from 'react'
import Auth from '../layout/Auth'
import * as api from '../api/users'

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr = null
// const obj = {
//     arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// }
// const obj = null

function Home() {
    const [listData, setListData] = useState({
        list: [],
        total: 0,
    })


    useEffect(() => {
        api.list().then(res => {
            setListData(res.data.result)
            console.log(res.data)
        })
    }, [])

    return (
        <Auth>
            <h1>Home</h1>
            <ul>
                {/** if(arr){arr.map((a, key) => (<li key={key}>{a}</li>))}}  */}
                {/* {obj?.arr && obj.arr.map((a, key) => (<li key={key}>{a}</li>))} */}
                {listData.list.map((user, key) => {
                    return (<li key={key}>{`${user.firstname} ${user.lastname}`}</li>)
                })}
            </ul>
        </Auth>
    )
}

export default Home
