'use client';
import { useEffect, useState } from 'react';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/signup');
                const result = await response.json();
                if (response.ok) {
                    setUsers(result.users);
                } else {
                    console.error('Failed to fetch users:', result.message);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Signed-Up Users</h1>
            {loading ? (
                <p>Loading...</p>
            ) : users.length === 0 ? (
                <p>No users have signed up yet.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">Company</th>
                            <th className="py-2 px-4 border-b">City</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border-b">{user.prenom}</td>
                                <td className="py-2 px-4 border-b">{user.nom}</td>
                                <td className="py-2 px-4 border-b">{user.societe}</td>
                                <td className="py-2 px-4 border-b">{user.ville}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.telephone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UsersPage;

