import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonCreateAcount,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold ,
} from './styles';

import Api from '../../Api';
import SignInput from '../../components/SignInput';
import Initial from '../../assets/logopet.svg';
import Cpf from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';


export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);
          
            if(json.token) {
               
                await AsyncStorage.setItem('token', json.token);

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else {
                alert('E-mail e/ou senha errados!');
            }

        } else {
            alert("Preencha os campos!");
        }
    }

    const handleRecoveryClick = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        });
    }

    return (
        <Container>
            <Initial width="100%" height="160" fill="#ffff" />

            <InputArea>
                <SignInput
               
                    IconSvg={Cpf}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
    
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

                <CustomButtonCreateAcount onPress={''}>
                    <CustomButtonText>CADASTRE-SE</CustomButtonText>
                </CustomButtonCreateAcount>
            </InputArea>

            <SignMessageButton onPress={handleRecoveryClick}>
                <SignMessageButtonText>Esqueceu sua senha?</SignMessageButtonText>
                <SignMessageButtonTextBold>Redefinir-senha</SignMessageButtonTextBold>
            </SignMessageButton> 


        </Container>
    );
}
