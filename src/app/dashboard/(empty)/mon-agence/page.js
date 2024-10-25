'use client';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/layout/dashboardPage';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/signup'); // Use the signup API to get all users

        if (response.ok) {
          const result = await response.json();
          
          // Get the email from the cookie
          const cookie = document.cookie;
          function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
          const email = getCookie('user');
          console.log(email)

          // Find the user by matching the email
          const foundUser = result.users.find(user => user.email === email);
          setUser(foundUser || null);
        } else {
          const errorResult = await response.json();
          setError(errorResult.message);
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setError('An error occurred while fetching user information.');
      }
    };

    fetchUser();
  }, []);

  return (
    <DashboardLayout title="Mon agency">
      <h1 className="font-bold text-left text-3xl">Mon agency</h1>
      {/* {error && <p className="text-red-500">{error}</p>}
      {user ? (
        <div>
          <h2 className="text-xl">User Information:</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.nom} {user.prenom}</p>
          <p><strong>Company:</strong> {user.societe}</p>
          <p><strong>Function:</strong> {user.fonction}</p>
          <p><strong>Address:</strong> {user.adresse_postale}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )} */}
    </DashboardLayout>
  );
};

export default Dashboard;
