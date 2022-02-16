import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {fetchUsers} from "./usersSlice";

const useUsersData = () => {
    const [usersData, setUsersData] = useState({
        state: "loading",
        users: null,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers()(dispatch)

        // const fetchRates = async () => {
        //     try {
        //         const response = await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");

        //         if (!response.ok) {
        //             throw new Error(response.statusText);
        //         }

        //         const users = await response.json();

        //         setUsersData({
        //             state: "success",
        //             users,
        //         });
        //     } catch {
        //         setUsersData({
        //             state: "error",
        //             users: null,
        //         });
        //     };
        // };

    
    }, []);

    return usersData;
};

export default useUsersData;
