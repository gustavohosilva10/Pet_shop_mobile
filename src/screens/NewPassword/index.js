import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
} from './styles';

import SignInput from '../../components/SignInput';
import Initial from '../../assets/logo.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const navigation = useNavigation();
    
    const handleSignClick = async () => {
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
            
    }

    return (
        <Container>
            <Initial width="100%" height="160" fill="#ffff" />

            <InputArea>
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Nova senha"
                />
                 <SignInput
                    IconSvg={LockIcon}
                    placeholder="Confirme a senha"
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Alterar senha</CustomButtonText>
                </CustomButton>
            </InputArea>

        </Container>
    );
}