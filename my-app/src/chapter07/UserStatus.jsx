import { useState, useEffect } from "react";

export default function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null)
    
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscibeUserStatus(props.user.id, handleStatusChange)
        }
    })

    if(isOnline === null) {
        return '대기중 ...'
    }
    return isOnline ? '온라인' : '오프라인'
}