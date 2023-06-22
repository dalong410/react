import React from "react";

function User({ user, onRemove, onToggle, onModify }) {
    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <button onClick={() => onModify(user)}>수정</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle, onModify }) {
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onModify={onModify}
                />
            ))}
        </div>
    );
}

export default UserList;