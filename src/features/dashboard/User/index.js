import Button from "../Button";

const User = ( {id, name, username, email, address} ) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address.city}</td>
        <td><Button title="edit"/></td>
        <td><Button title="delete"/></td>
    </tr>
);

export default User;
