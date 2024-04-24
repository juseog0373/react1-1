import React, { useState } from 'react';

export default function Midterm(props) {
    const [name, setName] = useState("");

    function apple() {
        setName("사과");
    } 
    function orange() {
        setName("오렌지")
    }
    function banana() {
        setName("바나나")
    }
    return (
        <div>
        <h1>당신은 어떤 과일을 좋아하나요? {name}</h1>
            <button onClick={apple}>사과</button>
            <button onClick={orange}>오랜지</button>
            <button onClick={banana}>바나나</button>
        </div>
    );
}
