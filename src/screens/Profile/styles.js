import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffff;

`;

export const Scroller = styled.ScrollView`
    flex:1;
`;

export const FakeSwiper = styled.View`
    width:100%;
    height:180px;
    background-color:#FFF68F;  
`;

export const PageBody = styled.View`
    background-color: #ffff;
    border-top-left-radius: 50px;
    margin-top:-80px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top:-30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px; 
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #E09B42; 
    background-color: #FFF68F;
`;
export const UserInfo = styled.View`
    flex: 1;
    justify-content:flex-end;
`; 

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const InformationUser = styled.View`
    margin-top: 3px;
    margin-left: 8px;
    flex: 1;
    justify-content:flex-start;
`;

export const InformationName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ServiceArea = styled.Text`
background-color: #ffff;

`;


