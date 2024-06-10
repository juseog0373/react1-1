export default function AttendanceBook() {
    return (
        <ul>
            {students.map((students, index) => {
                return <li key={index}>{students.name}</li>
            })}
        </ul>
    )
}

const students = [
    {name: '홍길동'},
    {name: '홍길동2'},
    {name: '홍길동3'},
    {name: '홍길동4'},
    {name: '홍길동5'},
    {name: '홍길동6'},
]