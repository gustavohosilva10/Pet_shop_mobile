import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Initial from '../../assets/logo.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{

        const timePreaload = async () => {
            setTimeout(function(){ navigation.navigate('SignIn') }, 3000);    
        }

        /*       
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                //Qunado tiver api
            } else {
                navigation.navigate('SignIn');
            } 
        } 

        */
        timePreaload();
       // checkToken();
    }, 
    []);

    return (
        <Container>
            <Initial width="100%" height="160"/>
          {/*   <LoadingIcon size="large" color="#fff" /> */}
        </Container>
    );
}