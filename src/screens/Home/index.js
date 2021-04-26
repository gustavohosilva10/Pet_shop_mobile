import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cogs from '../../assets/settings.svg';
import AccountIcon from '../../assets/account.svg';
import {
    Container,
    Scroller,
    ListArea,
    Header, BalanceContainer, IconConfig, IconProfile,Wrapper
} from './styles';

import Profile from '../../components/Profile';
import MyPets from '../../components/MyPets';
import Vaccines from '../../components/Vaccines';
import Services from '../../components/Services';

export default () => {
    const navigation = useNavigation();
    
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(false);
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <BalanceContainer>
                        <IconProfile>
                            <AccountIcon  width="30" height="50" fill="#000000" />
                        </IconProfile>
                        
                        <IconConfig>
                            <Cogs  width="25" height="50" fill="#000000" />
                        </IconConfig>
                    </BalanceContainer>

                </Header>

            <Scroller refreshControl={ 
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
                <ListArea>
                    <Profile />
                    <MyPets />
                    <Vaccines />
                    <Services />
                </ListArea>

            </Scroller>
            </Container>
        </Wrapper>
    );
}