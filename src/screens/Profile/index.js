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
    JobName,


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
                            <UserInfoName>Gustavo Henrique</UserInfoName>
                            <JobName>Caminhoneiro</JobName>
                        </UserInfo>
                    </UserInfoArea>

                    <ServiceArea>

                    </ServiceArea>
                </PageBody>
            </Scroller>
        </Container>
    );
}