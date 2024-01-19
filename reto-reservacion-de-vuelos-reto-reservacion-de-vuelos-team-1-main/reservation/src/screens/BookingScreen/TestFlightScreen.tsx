import React, {useState, useEffect} from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {Input} from '../../components/Input/Input';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Snackbar from 'react-native-snackbar';

import {addDoc, getDocs, query, where} from 'firebase/firestore';
import {FIREBASE_FLIGHTS} from '../../../config/firebase-config';

import {useSelector} from 'react-redux';
import {RootState} from '../../types/types';

export const TestFlightScreen = () => {
  const [country, setCountry] = useState('');

  const userIdValue = useSelector((state: RootState) => state.counter.userId);

  const fetchFlights = async () => {
    const q = query(FIREBASE_FLIGHTS, where('uid', '==', userIdValue));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      console.log('Document:', doc.data());
    });
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleSubmit = async () => {
    if (country != '') {
      let doc = await addDoc(FIREBASE_FLIGHTS, {
        country: country,
        uid: userIdValue,
      });
      if (doc) {
        Snackbar.show({
          text: 'Success!',
          backgroundColor: 'green',
        });
      } else {
        Snackbar.show({
          text: 'Error!',
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Please write something',
        backgroundColor: '#5C6EF8',
      });
    }
  };

  return (
    <View style={styles.column}>
      <Text style={styles.header}>Ready to fly?</Text>
      <Input
        title="MX City"
        hint="Where are you going?"
        width={wp('80%')}
        handleChange={setCountry}
        value={country}
      />
      <PrimaryButton
        title="Submit"
        onPress={handleSubmit}
        isActive={true}
        width={wp('80%')}
      />
      <Text>{}</Text>
    </View>
  );
};
