import Comment from "./Comment"
import React from "react"

const comments  = [
    {
        name: "퉁퉁이",
        comment: "나는야퉁퉁이",
    },
    {
        name: "비실이",
        comment: "나는야비실이",
    },
    {
        name: "이슬이",
        comment: "나는야s이슬이",
    }
]

export default function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}