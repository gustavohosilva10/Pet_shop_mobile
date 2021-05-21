import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native';
const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 25px;
    flex-direction: row;
    shadowColor: #000;
    shadowOpacity: 0.25;
    shadowRadius: 3.84;
    elevation: 5;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 3px solid #E09B42;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 14px;
    color:#E09B42;
`;

export default ({}) => {
    return (
        <Area>
            <FontAwesomeIcon  width="48px" height="44px" border-radius="20px;" icon={ faShoppingCart} ></FontAwesomeIcon>
            <InfoArea>
                <UserName>Serviços</UserName>
                
                <Button
                    title="Entrar"
                    color="#E09B42"
                    width="85px"
                    height= "26px"
                    onPress={() => navigation.navigate('CompletProfile')}
                />

            </InfoArea>
        </Area>
    );
}