import AsyncStorage from 'react-native';
const BASE_API = 'http://6b7542cdb93c.ngrok.io';

export default {
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