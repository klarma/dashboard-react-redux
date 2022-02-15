const User = ( {id, name, username, email, address} ) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address.city}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>
);

export default User;
