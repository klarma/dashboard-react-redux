import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        addUser: ({ users }, { payload }) => {
            users.push(payload);
        },
    },
});

export const { addUser } = usersSlice.actions;
export const selectUsers = state => state.users;
export default usersSlice.reducer;
