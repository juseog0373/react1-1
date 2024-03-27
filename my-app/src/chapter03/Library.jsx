import React from "react";
import Book from "./Book";

export default function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={400} />
            <Book name="처음 만난 AWS" numOfPage={500} />
            <Book name="처음 만난 리액트" numOfPage={600} />
        </div>
    )
}