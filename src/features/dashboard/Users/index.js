import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUsers } from "../../../usersSlice";
import User from "../User";
import { Table } from './styled';

const Users = () => {
    const { users } = useSelector(selectUsers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

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
