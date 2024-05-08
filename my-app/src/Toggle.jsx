import { useState } from "react";

export default function Toggle(props) {
    const [isToggleOn, setInToggleOn] = useState(true)

    const handleClick = () => {
        setInToggleOn((isToggleOn) => !isToggleOn)
    }
    return (
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    )
}