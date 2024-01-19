import React from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import Snackbar from 'react-native-snackbar';

import {addDoc} from 'firebase/firestore';
import {FIREBASE_FLIGHTS} from '../../../../config/firebase-config';

import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const RequestReceivedScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const userIdValue = useSelector((state: RootState) => state.counter.userId);

  const {
    originCountry,
    originCity,
    destinationCity,
    destinationCountry,
    passengers,
    selectedDate,
  } = useSelector((state: RootState) => state.counter);

  const handleSubmit = async () => {
    if (passengers != '') {
      let doc = await addDoc(FIREBASE_FLIGHTS, {
        originCountry: originCountry,
        originCity: originCity,
        destinationCity: destinationCity,
        destinationCountry: destinationCountry,
        passengers: passengers,
        selectedDate: selectedDate,
        uid: userIdValue,
      });
      if (doc) {
        Snackbar.show({
          text: 'Success!',
          backgroundColor: 'green',
        });
        navigation.navigate('MyFlightsScreen');
      } else {
        Snackbar.show({
          text: 'Error, try again later',
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
    <View style={styles.container}>
      <CardFlight
        originCountry={originCountry}
        originCity={originCity}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        passengers={passengers}
        selectedDate={selectedDate}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.header}>Your request was received.</Text>
      </View>
      <PrimaryButton
        title="Finish"
        onPress={() => {
          handleSubmit();
        }}
        isActive={true}
        width={wp('70%')}
      />
    </View>
  );
};
