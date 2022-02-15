import useUsersData from "../../../useUsersData";
import { Table } from './styled';

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
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;
