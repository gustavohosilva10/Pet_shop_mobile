import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_API = 'https://3715ba2b0ed3.ngrok.io';        

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
    },

    completeRegister: async (address,telephone,cellphone,cep_user) => {
        console.log("address", address);
        console.log("telephone", telephone);
        console.log("cellphone", cellphone);
        console.log("cep_user", cep_user);

        
        const token = await AsyncStorage.getItem('token');
        
        console.log(token);
        const req = await fetch(`${BASE_API}/api/store/address`,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify({address,telephone,cellphone,cep_user})
        });
    
        const json = req;
        return json;
    }


};