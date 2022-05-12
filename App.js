/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './Components/Home';
import Landing from './Components/Landing';
import Request from './Components/request';
import Search from './Components/search';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import fetchMoney from './Store/reducers/fetchMoney';
import fetchTransactions from './Store/reducers/fetchTransaction';
import firsttime from './Store/reducers/firsttime';

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: {
    money: fetchMoney,
    transactions: fetchTransactions,
    firsttime: firsttime,
  },
});

const Header = () => {
  return <View style={{display: 'none', height: 0}}></View>;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{
            //   title: '',
            //   headerStyle: <Header />,
            // }}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            // options={{
            //   title: '',
            //   headerStyle: <Header />,
            // }}
          />
          <Stack.Screen
            name="Request"
            component={Request}
            // options={{
            //   title: '',
            //   headerStyle: <Header />,
            // }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            // options={{
            //   title: '',
            //   headerStyle: <Header />,
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
