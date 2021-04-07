import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TabHome from '../components/TabHome';

const Tab = createMaterialTopTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><TabHome {...props} />} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
);