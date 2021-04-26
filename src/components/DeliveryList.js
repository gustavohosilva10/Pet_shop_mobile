import React from 'react';
import styled from 'styled-components/native';
import DeliveryIcon from '../assets/principal.svg';

const Area = styled.TouchableOpacity`
    background-color: #E09B42;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
    border: 3px solid #DB504A;
`;

const Delivery = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
   
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
    border: 2px solid #800000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 14px;
    color:#800000;
`;


export default ({}) => {
    return (
        <Area>
            <DeliveryIcon width="88px" height="88px" border-radius="20px;"/>
            <InfoArea>
                <UserName>Belo horizonte a São Paulo</UserName>

                <SeeProfileButton>
                    <SeeProfileButtonText>Iniciar</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}