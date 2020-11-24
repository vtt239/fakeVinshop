import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import UserScreen from './userScreen';
import notiScreen from './notiScreen';

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Đặt hàng"
        component={Home}
        options={{
          //title: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name="home" size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={UserScreen}
        options={{
          //title: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name="bell" size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={UserScreen}
        options={{
          //title: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon focused={focused} name="user" size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabScreen;
