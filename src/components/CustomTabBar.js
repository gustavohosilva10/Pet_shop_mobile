import React, { useContext } from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import AccountIcon from '../assets/account.svg';
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const TabArea = styled.View`
    height: 60px;
    background-color:#E09B42; 
    flex-direction: row;
`;


const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #FFF68F;
    margin-top: -20px;
`;
export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        
        <TabArea>

            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#000000" />
            </TabItem>

            <TabItemCenter onPress={()=>goTo('Profile')}>
                <FontAwesomeIcon  width="32" height="32" fill="#FFF68F" icon={ faPaw } ></FontAwesomeIcon>
            </TabItemCenter>

 {/*            <TabItem onPress={()=>goTo('')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#000000" />
            </TabItem> */}

            <TabItem onPress={()=>goTo('Profile')}>
                    <AccountIcon style={{opacity: state.index === 3? 1 : 0.5}} width="24" height="24" fill="#000000" />
            </TabItem>
        </TabArea>
    );

}
