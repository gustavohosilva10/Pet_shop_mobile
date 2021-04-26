import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import AccountIcon from '../assets/account.svg';

const Teste = styled.View`
    height:80px;
    background-color:#FFF68F; 
    flex-direction: row;
`;

const Testeitem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top:35px;
`;

export default ({ state }) => {
    const navigation = useNavigation();
    
    const handleProfileClick = async () => {
        navigation.reset({
            routes:[{name:'Profile'}]
        });
            
    }

    return (
        <Teste>
            <Testeitem  onPress={handleProfileClick}>
                <AccountIcon style={{opacity: state.index === 3? 1 : 0.5}} width="34" height="34" fill="#0000FF" />
            </Testeitem>
        </Teste>
    );
}