import React from "react";

// export default function Welcome(props) {
//     return <h1>안녕, {props.name}</h1>
// }

export default class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>
    }
}
