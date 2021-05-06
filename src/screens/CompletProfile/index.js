import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

} from './styles';


import RegisterInput from '../../components/RegisterInput';
import Phone from '../../assets/phone.svg';
import Cellphone from '../../assets/cellphone.svg';
import Picture from '../../assets/picture.svg';
import Home from '../../assets/home.svg';


export default () => {
    const navigation = useNavigation();

 /*    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState(''); */
 

    return (
        <Container>

            <InputArea>

                    <RegisterInput
                        IconSvg={Picture}
                        placeholder="Foto de perfil"
                        value={''}
                        onChangeText={''}
                    />

                    <RegisterInput
                        IconSvg={Home}
                        placeholder="Endereço"
                        value={''}
                        onChangeText={''}
                    />

                    <RegisterInput
                        IconSvg={Phone}
                        placeholder="Telefone"
                        value={''}
                        onChangeText={''}
                    />

                    <RegisterInput
                        IconSvg={Cellphone}
                        placeholder="Celular"
                        value={''}
                        onChangeText={''}
                    />

                    <CustomButton onPress={''}>
                        <CustomButtonText>Salvar</CustomButtonText>
                    </CustomButton> 

            </InputArea>

        </Container>
    );
}
