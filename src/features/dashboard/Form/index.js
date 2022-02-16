import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers } from "../../../usersSlice";
import Button from "../Button";
import { LabelText, Input } from "./styled";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const inputNameRef = useRef(null);

    const { users } = useSelector(selectUsers);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            id: users.length + 1,
            name: name.trim(),
            email: email.trim(),
        }

        if (!newUser) {
            return;
        };

        dispatch(addUser(newUser));

        setName("");
        setEmail("");
        inputNameRef.current.focus();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                <LabelText>
                    Name
                </LabelText>
                <Input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    ref={inputNameRef}
                    type="text"
                    autoFocus
                    required
                />
            </label>
            <br></br>
            <label>
                <LabelText>
                    Email
                </LabelText>
                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    required
                />
            </label>
            <br></br>
            <Button title="Cancel" />
            <Button title="Submit" />
        </form>
    )
};

export default Form;
