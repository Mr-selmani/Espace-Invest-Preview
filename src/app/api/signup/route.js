import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'users.json');

// Function to read users from the JSON file
const readUsersFromFile = () => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading users file:', error);
        return [];
    }
};

// Function to write users to the JSON file
const writeUsersToFile = (users) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing to users file:', error);
    }
};

export async function POST(req) {
    try {
        const data = await req.json();
        const { email, acc_type, societe, fonction, siren, adress_societe, prenom, age, ville, nom, sexe, adresse_postale } = data;

        if (acc_type && societe && fonction && siren && prenom && nom && ville) {
            const users = readUsersFromFile();

            // Check if the email already exists
            const emailExists = users.some(user => user.email === email);
            if (emailExists) {
                return new Response(JSON.stringify({ success: false, message: 'Email already exists.' }), {
                    status: 409, // Conflict
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            // Add the new user if the email does not exist
            users.push(data);
            writeUsersToFile(users);

            return new Response(JSON.stringify({ success: true, message: 'User registered successfully!' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: 'Required fields are missing.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return new Response(JSON.stringify({ success: false, message: 'Internal server error.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function GET() {
    const users = readUsersFromFile();
    return new Response(JSON.stringify({ users }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}