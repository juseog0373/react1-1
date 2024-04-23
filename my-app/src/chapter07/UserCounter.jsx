import { useEffect, useState } from "react"

export default function Counter(props) {
    // var count = 0
    // const [변수명, set함수명] = useState(초기값)
    const [count, setCount] = useState(0)
    
    // userEffect: 부가적인 효과를 사용하기 위한(side effect, 부(가적인)작용)
    // useEffect(() => {
    //     document.title = `총 ${count}번 클릭 했습니다.`
    // })
    return (
        <div>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={() => /*count++*/ setCount(count+1)}>
                클릭
            </button>
        </div>
    )
}