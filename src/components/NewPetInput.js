import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:#ffff;
    flex-direction: row;
    border-radius: 30px;
    padding-lef: 15px;
    align-items: center:
    margin-bottom: 15px;
    border 2px solid  #00000;
`;

const Input = styled.TextInput`
    flex: 1 ;
    font-size: 16px;
    color: #800000;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText}) =>{
    return (
        <InputArea>
            <InconSvg width="24" height = "24" fill="#00000" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#000000"
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}