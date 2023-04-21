import React from "react";

const UserEntry = (props) => {
    return <li>
        {`${props.username} (${props.age}) years old`}
    </li>
}

export default UserEntry