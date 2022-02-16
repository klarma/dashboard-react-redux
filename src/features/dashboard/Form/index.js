import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from "../../../usersSlice";
import { LabelText, Input } from "./styled";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event)=>{
        event.preventDefault();

        const newUser = {
            name: name.trim(),
            email: email.trim(),
        }

        if (!newUser) {
            return;
        };

        dispatch(addUser({
            newUser
        }));
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
            <button>Cancel</button>
            <button>Submit</button>
        </form>
    )
};

export default Form;
