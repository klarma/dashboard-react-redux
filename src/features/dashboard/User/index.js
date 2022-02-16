import Button from "../Button";

const User = ({ id, name, username, email, address }) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        {!!username ? <td>{username}</td> : <td></td>}
        <td>{email}</td>
        {!!username ? <td>{address.city}</td> : <td></td>}
        <td><Button title="edit" /></td>
        <td><Button title="delete" /></td>
    </tr>
);

export default User;
