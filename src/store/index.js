import { useEffect } from "react";

let userData

function Store(setState) {

    useEffect(() => {

        if (!userData) {
            //call api เพื่อเอาข้อมูล user

            //userData = ข้อมูลที่มาจาก api   
        }
    }, [])
}

export const user = userData

export const store = Store