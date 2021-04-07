import AsyncStorage from 'react-native';
const BASE_API = 'https://d165dcd58b5a.ngrok.io/api';

export default {
    signIn: async (email,password) => {
        console.log("email", email);
        console.log("password", password);
        const req = await fetch(`${BASE_API}/auth/login`,{
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