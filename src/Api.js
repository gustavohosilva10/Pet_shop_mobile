import AsyncStorage from 'react-native';
const BASE_API = 'https://b431a99f946c.ngrok.io';

export default {

    register: async (name,email,password) => {
        console.log("name", name);
        console.log("email", email);
        console.log("password", password);
        const req = await fetch(`${BASE_API}/api/register`,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password})
        });
        const json = await req.json();
        return json;
    },
    
    signIn: async (email,password) => {
        console.log("email", email);
        console.log("password", password);
        const req = await fetch(`${BASE_API}/api/login`,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    }
};