import React from "react";

const UserEntry = (props) => {
    return <p>
        {`${props.username} (${props.age})`}
    </p>
}

export default UserEntry