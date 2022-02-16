import { useDispatch } from "react-redux";
import { getUsers, fetchUsers } from "../../../usersSlice";
import User from "./User";
import { Table } from './styled';
import { useEffect, useState } from "react";


const Users = () => {
    const [users, setUsers]= useState([]);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
        const usersFromStore = dispatch(getUsers());
        console.log("Jest to",usersFromStore)
        setUsers(usersFromStore);

    },[dispatch]);

    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {users.map(({ id, name, username, email, address }) => (
                        <User
                            key={id}
                            id={id}
                            name={name}
                            username={username}
                            email={email}
                            address={address}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;
