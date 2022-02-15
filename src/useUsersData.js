import { useEffect, useState } from "react";

const useUsersData = () => {
    const [usersData, setUsersData] = useState({
        state: "loading",
        users: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const users = await response.json();

                setUsersData({
                    state: "success",
                    users,
                });
            } catch {
                setUsersData({
                    state: "error",
                    users: null,
                });
            };
        };

        setTimeout(fetchRates, 500);
    }, []);

    return usersData;
};

export default useUsersData;
