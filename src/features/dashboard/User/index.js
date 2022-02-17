import { useDispatch } from "react-redux";
import { removeUser } from "../../../usersSlice";
import Button from "../Button";

const User = ({ id, name, username, email, address }) => {
    const dispatch = useDispatch();

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            {!!username ? <td>{username}</td> : <td></td>}
            <td>{email}</td>
            {!!username ? <td>{address.city}</td> : <td></td>}
            <td><Button title="edit" /></td>
            <td><Button title="delete" onClick={() => dispatch(removeUser(id))} /></td>
        </tr>
    );
};

export default User;
