import React from "react";

export default function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h1>{`이 책의 페이지 수는 ${props.numOfPage} 입니다. `}</h1>
        </div>
    )
}