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
import RegisterInput from '../../components/RegisterInput';
import Initial from '../../assets/logopet.svg';
import Cpf from '../../assets/person.svg';
import Email from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';


export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  
    const handleRegisterClick = async () => {
        if(nameField!= '' && emailField != '' && passwordField != '') {

            let json = await Api.register(nameField,emailField, passwordField);
          
            if(json.token) {
              
                await AsyncStorage.setItem('token', json.token);
                alert('Registrado com sucesso!');
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

    const handleReturnLoginClick = () => {
        
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <Initial width="100%" height="160" fill="#ffff" />

            <InputArea>

                <RegisterInput
                    IconSvg={Cpf}
                    placeholder="Registe seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <RegisterInput
                    IconSvg={Email}
                    placeholder="Registre  seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
    
                <RegisterInput
                    IconSvg={LockIcon}
                    placeholder="Registre sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleRegisterClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
       
            </InputArea>

            <SignMessageButton onPress={handleReturnLoginClick}>
                <SignMessageButtonText>Já possui uma conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton> 


        </Container>
    );
}
