import React from 'react'
import Auth from '../layout/Auth'

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr = null
const obj = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}
// const obj = null

function Home() {
    return (
        <Auth>
            <h1>Home</h1>
            <ul>
                {/** if(arr){arr.map((a, key) => (<li key={key}>{a}</li>))}}  */}
                {obj?.arr && obj.arr.map((a, key) => (<li key={key}>{a}</li>))}
            </ul>
        </Auth>
    )
}

export default Home
