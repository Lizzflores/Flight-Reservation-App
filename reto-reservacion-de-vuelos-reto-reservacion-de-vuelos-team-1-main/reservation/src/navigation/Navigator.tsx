import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUpScreen} from '../screens/SignUpScreen/SignUpScreen';
import OriginScreen from '../screens/BookingScreen/OriginScreen/OriginScreen';
import {DestinationScreen} from '../screens/BookingScreen/DestinationScreen.tsx/DestinationScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {MyFlightsScreen} from '../screens/MyFlightsScreen/MyFlightsScreen';
import {SelectDateScreen} from '../screens/BookingScreen/SelectDateScreen/SelectDateScreen';
import {PassengersScreen} from '../screens/BookingScreen/PassengersScreen/PassengersScreen';
import {RequestReceivedScreen} from '../screens/BookingScreen/RequestReceivedScreen/RequestReceivedScreen';

import {onAuthStateChanged, User} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../config/firebase-config';

import {useDispatch} from 'react-redux';

import {saveUserid} from '../redux/slices/booking.slice';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MyFlightsScreen: undefined;
  OriginScreen: undefined;
  DestinationScreen: undefined;
  SelectDateScreen: undefined;
  PassengersScreen: undefined;
  RequestReceivedScreen: undefined;
};

export const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);

  const dispatch = useDispatch();

  const handleUserId = (userId: string) => {
    if (userId) {
      dispatch(saveUserid(userId));
    } else {
      dispatch(saveUserid(''));
    }
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
      user ? handleUserId(user.uid) : null;
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {user ? (
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="MyFlightsScreen"
            component={MyFlightsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OriginScreen"
            component={OriginScreen}
            options={{title: null, headerTintColor: '#6170f7'}}
          />
          <Stack.Screen
            name="DestinationScreen"
            component={DestinationScreen}
            options={{title: null, headerTintColor: '#6170f7'}}
          />
          <Stack.Screen
            name="SelectDateScreen"
            component={SelectDateScreen}
            options={{title: null, headerTintColor: '#6170f7'}}
          />
          <Stack.Screen
            name="PassengersScreen"
            component={PassengersScreen}
            options={{title: null, headerTintColor: '#6170f7'}}
          />
          <Stack.Screen
            name="RequestReceivedScreen"
            component={RequestReceivedScreen}
            options={{title: null, headerTintColor: '#6170f7'}}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
