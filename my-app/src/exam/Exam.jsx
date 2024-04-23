import { useEffect, useState } from "react"

export default function Home(props) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{`안녕하세요 저는 ${props.hakbun} ${props.name} 입니다`}</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={() => setCount(count+1)}>클릭</button>
        </div>
    )
}