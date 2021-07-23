import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    InformationUser,
    InformationName


 } from './styles';

export default () => {

    
    return (
        <Container>
            <Scroller>
                <FakeSwiper></FakeSwiper>

                <PageBody>
                    <UserInfoArea>
                        <UserAvatar />
                        <UserInfo>
                            <UserInfoName>Nome:Gustavo Henrique</UserInfoName>
                            <UserInfoName>Total de pets (4)</UserInfoName>
                        </UserInfo>
                    </UserInfoArea>
                   

                    <ServiceArea>
                        <InformationUser>
                            <InformationName>Cpf: 000.000.000-00</InformationName>
                            <InformationName>Endereço:R. hoffman</InformationName>
                            <InformationName>Telefone: (00) 0000 - 0000</InformationName>
                            <InformationName>Celular: (00) 0 0000 - 0000</InformationName>
                        </InformationUser>
                    </ServiceArea>

                </PageBody>
            </Scroller>
        </Container>
    );
}