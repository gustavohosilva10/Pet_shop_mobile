import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TabHome from '../components/TabHome';
const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={''} />
        <Tab.Screen name="Appointments" component={''} />
    </Tab.Navigator>
   
);