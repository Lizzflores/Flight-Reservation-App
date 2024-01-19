import React from 'react';
import {View, Text} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardFlight from '../../../components/CardFlight/CardFlight';
import {Calendar} from '../../../components/Calendar/Calendar';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const SelectDateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {
    originCountry,
    originCity,
    destinationCity,
    destinationCountry,
    selectedDate,
  } = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.container}>
      <CardFlight
        originCountry={originCountry}
        originCity={originCity}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.header}>Select date</Text>
        <Calendar />
      </View>
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('PassengersScreen');
        }}
        isActive={Boolean(selectedDate)}
        width={wp('70%')}
      />
    </View>
  );
};
