import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        getUsers: ({ users }, a) => {
            console.log(users, a)
            return users;
        },
        setUsers: ({users}, {payload})=>{
            console.log(2,payload)
            users = payload;
        },
        addUser: ({ users }, { payload }) => {
            users.push(payload);
        },
    },
});

export const { addUser, getUsers } = usersSlice.actions;
export const selectUsers = state => state.users1;
export const fetchUsers = ()=> {
    return async (dispatch)=>{
        try{
            console.log(1)
            const response = await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");
            const data = await response.json();
            console.log(data)
            dispatch(usersSlice.actions.setUsers(data));
            
        }catch(e){

        }
    }
}
export default usersSlice.reducer;
