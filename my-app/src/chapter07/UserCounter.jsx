import { useEffect, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    // userEffect 추가
    useEffect(() => {
        document.title = `총 ${count}번 클릭 했습니다.`
    })
    return (
        <div>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={() => setCount(count+1)}>클릭</button>
        </div>
    )
}