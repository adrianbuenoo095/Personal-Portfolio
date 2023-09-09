import ListItem from '@material-ui/core/ListItem';
import { useEffect, useState } from 'react';

interface User {
    name: string;
    email: string;
    userId:number
}

function User({userId}: User) {

    const [user, setUser] = useState({name: '', email:''});
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            const newUser = await res.json();
            setUser(newUser);
        };
        fetchUser();
    }, [userId])

    return(
        <ListItem dense divider>
        <ListItem primary={user.name} secondary={user.email}>
        </ListItem>
        )
    
}

export default User: