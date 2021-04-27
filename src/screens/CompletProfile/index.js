import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

} from './styles';

import Api from '../../Api';
import RegisterInput from '../../components/RegisterInput';
import Initial from '../../assets/logopet.svg';



export default () => {
  const navigation = useNavigation();

  const [addressField, setNameField] = useState('');
  const [telephoneField, setEmailField] = useState('');
  const [cellphoneField, setPasswordField] = useState('');
  
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

    return (
        <Container>
            <Initial width="100%" height="160" fill="#ffff" />

            <InputArea>

                <RegisterInput
                    placeholder="Endereço"
                    value={addressField}
                    onChangeText={t=>setNameField(t)}
                />

                <RegisterInput
                    placeholder="Telefone"
                    value={telephoneField}
                    onChangeText={t=>setEmailField(t)}
                />
    
                <RegisterInput
                    placeholder="Celular"
                    value={cellphoneField}
                    onChangeText={t=>setPasswordField(t)}
                />

                <CustomButton onPress={handleRegisterClick}>
                    <CustomButtonText>Salvar</CustomButtonText>
                </CustomButton>
       
            </InputArea>

        </Container>
    );
}
