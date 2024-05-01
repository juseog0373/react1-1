import { useState, useEffect } from "react";

export default function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id)
   
    return (
        <li style={{color: isOnline ? 'green' : 'red'}}>
            {props.user.name}
        </li>
    )
}