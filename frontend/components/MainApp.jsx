import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import MessagerScreen from './screens/MessagerScreen';
import { Ionicons } from '@expo/vector-icons';
import MyColors from '../consts/mycolors'

const Tab = createBottomTabNavigator();
const MainApp = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'chat') {
                            iconName = 'code';
                        } else if (route.name === 'message') {
                            iconName = 'mail-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarStyle: {
                        backgroundColor: MyColors.secondary,
                        borderTopWidth: 0,
                        elevation : 4
                    },
                    tabBarActiveTintColor: MyColors.accent,
                    tabBarInactiveTintColor: 'white',
                    tabBarShowLabel: false,
                    headerShown: false,

                })}
            >
                <Tab.Screen name="home" component={HomeScreen} />
                <Tab.Screen name="chat" component={ChatScreen} />
                <Tab.Screen name="message" component={MessagerScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
