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
            routes:[{name:'NewPassword'}]
        });
            
    }

    return (
        <Container>
            <Initial width="100%" height="160" fill="#ffff" />

            <InputArea>
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite o codigo"
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Verificar</CustomButtonText>
                </CustomButton>
            </InputArea>

        </Container>
    );
}