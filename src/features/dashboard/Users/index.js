import useUsersData from "../../../useUsersData";
import { Table } from './styled';
import User from "./User";

const Users = () => {
    const { users, state } = useUsersData();

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
                    {state === "success" && users.map(({ id, name, username, email, address }) => (
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
