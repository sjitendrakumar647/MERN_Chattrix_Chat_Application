import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

function useGetAllUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = Cookies.get('jwt');
                const res = await axios.get('http://localhost:4001/user/allusers', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(res.data);
                setLoading(false);
                console.log('Users fetched successfully:', res.data);

            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return [users, loading];
}

export default useGetAllUsers;