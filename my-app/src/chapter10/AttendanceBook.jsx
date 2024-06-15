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
    {id: 1, name: '홍길동'},
    {id: 2, name: '홍길동2'},
    {id: 3, name: '홍길동3'},
    {id: 4, name: '홍길동4'},
    {id: 5, name: '홍길동5'},
    {id: 6, name: '홍길동6'},
]