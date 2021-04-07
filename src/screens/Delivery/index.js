import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    ListArea
} from './styles';

import DeliveryList from '../../components/DeliveryList';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    return (
        <Container>
            <Scroller refreshControl={''}>
                
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Minhas entregas</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={''}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={''}
                    />
                    <LocationFinder onPress={''}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>
                
                <ListArea>
                    <DeliveryList />
                    <DeliveryList />
                    <DeliveryList />
                    <DeliveryList />
                </ListArea>

            </Scroller>
        </Container>
    );
}