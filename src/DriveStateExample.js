import React, { useState } from 'react'

const DriveStateExample = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleAddUsers = () => {
        setUsers([...users, user])
    }
    console.log(users);

    const total = users.length
    const lastUser = user.toString()
    const uniqueUser = [... new Set(user)].length

    return (
        <div>
            <h2>Total Users : {total}</h2>
            <h2>Last Users : {lastUser}</h2>
            <h2>Total Unique Users : {uniqueUser}</h2>
            <input type='text' onChange={(event) => setUser(event.target.value)} placeholder='Add new user' />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item, index) => (<h4 key={index}>{item}</h4>))
            }
        </div>
    )
}

export default DriveStateExample;