import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        setUsers: (state, { payload }) => {
            state.users = payload;
        },
        addUser: ({ users }, { payload }) => {
            users.push(payload);
        },
    },
});

export const { addUser, setUsers } = usersSlice.actions;
export const selectUsers = state => state.users;

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");
            const data = await response.json();
            dispatch(usersSlice.actions.setUsers(data));
        } catch (e) {

        };
    };
};

export const postUsers = (users) => {
    return async () => {
        try {
            await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(users),
            });
        } catch (e) {

        };
    };
};

export default usersSlice.reducer;
