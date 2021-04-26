import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF68F;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Header = styled.View`
    height:80px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceContainer = styled.View`
    width:1200px;
    height: 50px;
    background-color:#FFF68F; 
    flex-direction: row;
`;

export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const IconProfile = styled.View`
   margin-left:15px;
`;

export const IconConfig = styled.View`
   margin-left:320px;
`;


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;