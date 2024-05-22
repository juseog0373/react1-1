import React, {useState} from "react";
import Toolbar from "./Toolbar";

export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }
    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <div onClick={onClickLogin}>소플과 함께 하는 리액트 로그인하기</div>
        </>
    )
}