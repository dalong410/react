import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email} = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    const modifyId = null;
    const onModify = (user) => {
        setInputs({
            username: user.username,
            email: user.email,
            id: user.id
        });
    };

    //todo update 완성시키기
    const onUpdate = () => {
        console.log(users);
        setUsers(
            users.map(user => 
                user.id === modifyId ? console.log(user) : user
            )
        );
        setInputs({
            username: '',
            email: '',
            id: ''
        });
    };

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
                onUpdate={onUpdate}
            />
            <UserList 
                users={users} 
                onRemove={onRemove} 
                onToggle={onToggle} 
                onModify={onModify}
            />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;